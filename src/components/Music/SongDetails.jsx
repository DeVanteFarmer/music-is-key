/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getSongsById, getComments, getLikes, getKeyById } from "../../services/SongServices.jsx"
import { Card, CardBody, CardTitle, CardText } from "reactstrap"
import './SongDetails.css'
import { getUserById } from "../../services/UserServices.jsx"

export const SongDetails = ({ currentUser }) => {
  const { songId } = useParams()
  const [song, setSong] = useState(null)
  const [keyDetails, setKeyDetails] = useState(null)
  const [user, setUser] = useState(null)
  const [comments, setComments] = useState([])
  const [likes, setLikes] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchSongData = async () => {
      try {
        const songData = await getSongsById(songId)
        if (!songData) {
          console.error("Song not found")
          return
        }
        console.log("Fetched Song Data:", songData); // Debugging
        setSong(songData)

        const userData = await getUserById(songData.userId)
        setUser(userData)

        const keyData = await getKeyById(songData.keyId)
        if (!keyData) {
          console.error("Key not found")
          return
        }
        console.log("Fetched Key Data:", keyData) // Debugging
        setKeyDetails(keyData)

        const commentsData = await getComments(songId)
        const commentsWithUserData = await Promise.all(
          commentsData.map(async (comment) => {
            const commentUser = await getUserById(comment.userId)
            return { ...comment, userName: commentUser.userName }
          })
        )
        setComments(commentsWithUserData)

        const likesData = await getLikes(songId)
        setLikes(likesData)
      } catch (error) {
        console.error("Error fetching song or user data:", error)
      }
    }
    fetchSongData()
  }, [songId])

  if (!song || !user || !keyDetails) return <div>Loading...</div>

  return (
    <Card className="song-details-card">
      <CardBody>
        <CardTitle tag="h5">{song.title}</CardTitle>
        <CardText>Artist: {song.artist}</CardText>
        <CardText>Uploaded By: {user.userName}</CardText>
        <CardText>
          <span
            className="key-link"
            onClick={() => navigate(`/MusicPage/keyDetails/${song.keyId}`)}
          >
            Key: {keyDetails.key}
          </span>
        </CardText>
        <CardText>Energy rate: {keyDetails.energyRate}</CardText>
        <CardText>Promotes Happiness?: {keyDetails.promotesHappiness ? "Yes" : "No"}</CardText>
        <CardText>Likes: {likes}</CardText>
        <div className="comments-section">
          <CardText>Comments:</CardText>
          {comments.map((comment, index) => (
            <div className="comment-box" key={index}>
              <div className="comment-user">{comment.userName}</div>
              <div className="comment-body">{comment.body}</div>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  )
}