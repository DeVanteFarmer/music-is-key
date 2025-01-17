/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllSongs, deleteSong, addLike, addComment, updateSong } from "../../services/SongServices.jsx";
import { Card, CardBody, CardTitle, CardText, Button, Form, FormGroup, Input } from "reactstrap";
import './Music.css';
import { ChatIcon, EditPencil, TrashcanDelete } from "../../assets/icons.jsx";

export const MusicPage = ({ currentUser }) => {
  const navigate = useNavigate();
  const [allSongs, setAllSongs] = useState([]);
  const [showCommentForm, setShowCommentForm] = useState(null);
  const [showEditForm, setShowEditForm] = useState(null);
  const [newComment, setNewComment] = useState("");
  const [editSong, setEditSong] = useState({ title: "", artist: "" });

  useEffect(() => {
    getAllSongs().then((songsArray) => {
      setAllSongs(songsArray);
    });
  }, []);

  const handleDelete = async (songId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this song?");
    if (confirmDelete) {
      await deleteSong(songId);
      setAllSongs(allSongs.filter(song => song.id !== songId));
    }
  };

  const handleAddLike = async (songId) => {
    if (currentUser && currentUser.id) {
      await addLike(songId, currentUser.id);
      setAllSongs(allSongs.map(song =>
        song.id === songId ? { ...song, likes: song.likes + 1 } : song
      ));
    }
  };

  const handleAddComment = async (e, songId) => {
    e.preventDefault();
    if (newComment.trim() === "") return;
    await addComment(songId, currentUser.id, newComment);
    navigate(`/MusicPage/songDetails/${songId}`);
  };

  const handleEditSong = async (e, songId) => {
    e.preventDefault();
    await updateSong(songId, editSong);
    setShowEditForm(null); // Close the edit form after submission
    setAllSongs(allSongs.map(song =>
      song.id === songId ? { ...song, title: editSong.title, artist: editSong.artist } : song
    ));
  };

  return (
    <>
      <div className="music-title">Sound Board!</div>
      <h2>Like and comment on your favorite songs!</h2>
      <h2>Select a song to see it's details!</h2>
      <div className="music-page">
        {allSongs.map((song) => (
          <Card key={song.id} className="song-card" onClick={() => navigate(`/MusicPage/songDetails/${song.id}`)}>
            <CardBody>
              <CardTitle tag="h5">{song.title}</CardTitle>
              <CardText>by: {song.artist}</CardText>
              <div className="button-group">
                {currentUser?.id === song.userId ? (
                  <>
                    <Button color="warning" className="custom-button-edit" onClick={(e) => {
                      e.stopPropagation();
                      setEditSong({ title: song.title, artist: song.artist, userId: song.userId, keyId: song.keyId });
                      setShowEditForm(song.id);
                    }}>Edit <EditPencil size={15} /> </Button>
                    <Button color="danger" className="custom-icon-button-delete" onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(song.id);
                    }}><TrashcanDelete size={25} /></Button>
                  </>
                ) : (
                  <>
                    <Button color="primary" className="custom-button-like" onClick={(e) => {
                      e.stopPropagation();
                      handleAddLike(song.id);
                    }}>Like</Button>
                    <Button color="info" className="custom-icon-button-comment" onClick={(e) => {
                      e.stopPropagation();
                      setShowCommentForm(song.id);
                    }}><ChatIcon size={27} /></Button>
                  </>
                )}
              </div>
              {showCommentForm === song.id && (
                <Form onSubmit={(e) => handleAddComment(e, song.id)} onClick={(e) => e.stopPropagation()}>
                  <FormGroup>
                    <Input
                      type="text"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Add a comment"
                      onClick={(e) => e.stopPropagation()} // Stop propagation to prevent navigation
                    />
                  </FormGroup>
                  <Button type="submit" color="info" onClick={(e) => e.stopPropagation()}>Submit Comment</Button>
                </Form>
              )}
              {showEditForm === song.id && (
                <Form onSubmit={(e) => handleEditSong(e, song.id)} onClick={(e) => e.stopPropagation()}>
                  <FormGroup>
                    <Input
                      type="text"
                      value={editSong.title}
                      onChange={(e) => setEditSong({ ...editSong, title: e.target.value })}
                      placeholder="Edit title"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="text"
                      value={editSong.artist}
                      onChange={(e) => setEditSong({ ...editSong, artist: e.target.value })}
                      placeholder="Edit artist"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </FormGroup>
                  <Button type="submit" color="warning" onClick={(e) => e.stopPropagation()}>Submit Edits</Button>
                </Form>
              )}
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  );
};
