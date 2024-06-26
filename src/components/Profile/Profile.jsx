/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getUserById, getUserSongs } from "../../services/UserServices.jsx"
import { deleteSong, updateSong } from "../../services/SongServices.jsx"
import { Card, CardBody, CardTitle, CardText, Button, Form, FormGroup, Input } from "reactstrap"
import './Profile.css'

export const Profile = ({ currentUser }) => {
    const navigate = useNavigate()
    const [userDetails, setUserDetails] = useState({})
    const [userSongs, setUserSongs] = useState([])
    const [showEditForm, setShowEditForm] = useState(null)
    const [editSong, setEditSong] = useState({ title: "", artist: "", userId: "", frequencyId: "" })

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                if (currentUser && currentUser.id) {
                    console.log("Current user ID:", currentUser.id) // Debug log
                    const userData = await getUserById(currentUser.id)
                    setUserDetails(userData)
                    const songsData = await getUserSongs(currentUser.id)
                    setUserSongs(songsData.filter(song => song.userId === currentUser.id))
                } else {
                    console.error("Current user ID is undefined")
                }
            } catch (error) {
                console.error("Error fetching user data:", error)
            }
        }
        fetchUserData()
    }, [currentUser])

    const handleDelete = async (songId) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this song?")
        if (confirmDelete) {
            await deleteSong(songId)
            setUserSongs(userSongs.filter(song => song.id !== songId))
        }
    }

    const handleEditSong = async (e, songId) => {
        e.preventDefault()
        await updateSong(songId, editSong)
        setUserSongs(userSongs.map(song =>
            song.id === songId ? { ...song, ...editSong } : song
        ))
        setShowEditForm(null)
    }

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
                            <CardText>
                                <span>User: {song.userId}</span>
                            </CardText>
                            <CardText>
                                <span 
                                    className="frequency-link" 
                                    onClick={() => navigate(`/MusicPage/frequencyDetails/${song.frequencyId}`)}
                                >
                                    Frequency: {song.frequencyId}
                                </span>
                            </CardText>
                            <Button color="warning" onClick={() => {
                                setEditSong({ title: song.title, artist: song.artist, userId: song.userId, frequencyId: song.frequencyId })
                                setShowEditForm(song.id)
                            }}>Edit</Button>
                            <Button color="danger" onClick={() => handleDelete(song.id)}>Delete</Button>
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
            <div className="profile-details">
                <img src={userDetails.img} alt="User Avatar" className="user-avatar" />
                <h2>{userDetails.userName}</h2>
            </div>
        </div>
    )
}