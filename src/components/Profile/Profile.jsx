/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserById, getUserSongs } from "../../services/UserServices.jsx";
import { deleteSong, updateSong, getKeyById, getSongsByIds, removeLike } from "../../services/SongServices.jsx";
import { Card, CardBody, CardTitle, CardText, Button, Form, FormGroup, Input } from "reactstrap";
import './Profile.css';
import { EditPencil, TrashcanDelete } from "../../assets/icons.jsx";

export const Profile = ({ currentUser }) => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});
  const [userSongs, setUserSongs] = useState([]);
  const [likedSongs, setLikedSongs] = useState([]);
  const [keyDetailsMap, setKeyDetailsMap] = useState({});
  const [showEditForm, setShowEditForm] = useState(null);
  const [editSong, setEditSong] = useState({ title: "", artist: "", userId: "", keyId: "" });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (currentUser && currentUser.id) {
          const userData = await getUserById(currentUser.id);
          setUserDetails(userData);

          const songsData = await getUserSongs(currentUser.id);
          setUserSongs(songsData.filter(song => song.userId === currentUser.id));

          // Fetch key details for user songs
          const keyDetailsPromises = songsData.map(song => getKeyById(song.keyId));
          const keyDetailsResults = await Promise.all(keyDetailsPromises);
          const keyDetailsMap = keyDetailsResults.reduce((acc, keyDetail) => {
            acc[keyDetail.id] = keyDetail;
            return acc;
          }, {});
          setKeyDetailsMap(keyDetailsMap);

          // Fetch liked songs
          const likedSongsData = await fetchLikedSongs(currentUser.id);
          setLikedSongs(likedSongsData);

          // Fetch key details for liked songs
          const likedSongsKeyDetailsPromises = likedSongsData.map(song => getKeyById(song.keyId));
          const likedSongsKeyDetailsResults = await Promise.all(likedSongsKeyDetailsPromises);
          const likedSongsKeyDetailsMap = likedSongsKeyDetailsResults.reduce((acc, keyDetail) => {
            acc[keyDetail.id] = keyDetail;
            return acc;
          }, {});
          setKeyDetailsMap(prevKeyDetailsMap => ({ ...prevKeyDetailsMap, ...likedSongsKeyDetailsMap }));

        } else {
          console.error("Current user ID is undefined");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, [currentUser]);

  const fetchLikedSongs = async (userId) => {
    try {
      const response = await fetch(`http://localhost:8088/likedSongs?userId=${userId}&liked=true`);
      const likedSongs = await response.json();
      const likedSongIds = likedSongs.map(song => song.songId);
      const songs = await getSongsByIds(likedSongIds);

      return songs;
    } catch (error) {
      console.error("Error fetching liked songs:", error);
      return [];
    }
  };

  const handleDelete = async (songId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this song?");
    if (confirmDelete) {
      await deleteSong(songId);
      setUserSongs(userSongs.filter(song => song.id !== songId));
    }
  };

  const handleEditSong = async (e, songId) => {
    e.preventDefault();
    await updateSong(songId, editSong);
    setUserSongs(userSongs.map(song =>
      song.id === songId ? { ...song, ...editSong } : song
    ));
    setShowEditForm(null);
  };

  const handleRemoveLike = async (songId) => {
    const confirmRemove = window.confirm("Are you sure you want to remove your like from this song?");
    if (confirmRemove) {
      await removeLike(songId, currentUser.id);
      setLikedSongs(likedSongs.filter(song => song.id !== songId));
    }
  };

  if (!currentUser) return <div>Loading...</div>; // Show loading state if currentUser is not yet set

  return (
    <div className="profile-page">
      <div className="user-songs">
        <h3>Your Songs</h3>
        {userSongs.map((song) => (
          <Card key={song.id} className="song-card">
            <CardBody>
              <CardTitle tag="h5">{song.title}</CardTitle>
              <CardText>{song.artist}</CardText>
              <CardText>Uploaded By: {userDetails.userName}</CardText>
              <CardText>
                <span
                  className="key-link"
                  onClick={() => navigate(`/MusicPage/keyDetails/${song.keyId}`)}
                >
                  Key: {keyDetailsMap[song.keyId]?.key}
                </span>
              </CardText>
              <CardText>Energy rate: {keyDetailsMap[song.keyId]?.energyRate}</CardText>
              <CardText>Promotes Happiness?: {keyDetailsMap[song.keyId]?.promotesHappiness ? "Yes" : "No"}</CardText>
              <div className="button-group">
                <Button color="warning" className="custom-button" onClick={(e) => {
                  e.stopPropagation();
                  setEditSong({ title: song.title, artist: song.artist, userId: song.userId, keyId: song.keyId });
                  setShowEditForm(song.id);
                }}>Edit <EditPencil size={15} /> </Button>
                <Button color="danger" className="custom-icon-button" onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(song.id);
                }}><TrashcanDelete size={25} /></Button>
              </div>
              {showEditForm === song.id && (
                <Form onSubmit={(e) => handleEditSong(e, song.id)}>
                  <FormGroup>
                    <Input
                      type="text"
                      value={editSong.title}
                      onChange={(e) => setEditSong({ ...editSong, title: e.target.value })}
                      placeholder="Edit title"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="text"
                      value={editSong.artist}
                      onChange={(e) => setEditSong({ ...editSong, artist: e.target.value })}
                      placeholder="Edit artist"
                    />
                  </FormGroup>
                  <Button type="submit" color="warning">Submit Edits</Button>
                </Form>
              )}
            </CardBody>
          </Card>
        ))}
      </div>
      <div className="liked-songs">
        <h3>Songs You've Liked</h3>
        {likedSongs.map((song) => (
          <Card key={song.id} className="song-card">
            <CardBody>
              <CardTitle tag="h5">{song.title}</CardTitle>
              <CardText>{song.artist}</CardText>
              <CardText>Uploaded By: {song.userName}</CardText>
              <CardText>
                <span
                  className="key-link"
                  onClick={() => navigate(`/MusicPage/keyDetails/${song.keyId}`)}
                >
                  Key: {keyDetailsMap[song.keyId]?.key}
                </span>
              </CardText>
              <CardText>Energy rate: {keyDetailsMap[song.keyId]?.energyRate}</CardText>
              <CardText>Promotes Happiness?: {keyDetailsMap[song.keyId]?.promotesHappiness ? "Yes" : "No"}</CardText>
              <div className="button-group">
                <Button color="danger" className="custom-icon-button" onClick={() => handleRemoveLike(song.id)}><TrashcanDelete size={25} />Like</Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
      <div className="profile-details">
        <img src={userDetails.img} alt="User Avatar" className="user-avatar" />
        <h2>{userDetails.userName}</h2>
      </div>
    </div>
  );
};
