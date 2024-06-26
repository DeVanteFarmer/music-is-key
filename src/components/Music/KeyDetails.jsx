/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getAllSongs, getKeyById } from "../../services/SongServices.jsx"
import { getUserById } from "../../services/UserServices.jsx"
import { Card, CardBody, CardTitle, CardText } from "reactstrap"
import './SongDetails.css'

export const KeyDetails = () => {
  const { keyId } = useParams()
  const [keyDetails, setKeyDetails] = useState(null)
  const [songs, setSongs] = useState([])
  const [users, setUsers] = useState({})

  useEffect(() => {
    const fetchKeyDetails = async () => {
      try {
        const keyData = await getKeyById(keyId)
        setKeyDetails(keyData)

        const songsArray = await getAllSongs()
        const filteredSongs = songsArray.filter(song => song.keyId === parseInt(keyId))
        setSongs(filteredSongs)

        // Fetch user details for each song
        const userIds = [...new Set(filteredSongs.map(song => song.userId))]
        const userPromises = userIds.map(id => getUserById(id))
        const userResults = await Promise.all(userPromises)
        const usersMap = userResults.reduce((acc, user) => {
          acc[user.id] = user
          return acc
        }, {})
        setUsers(usersMap)
      } catch (error) {
        console.error("Error fetching key or songs data:", error)
      }
    }
    fetchKeyDetails()
  }, [keyId])

  if (!keyDetails) return <div>Loading...</div>

  return (
    <div className="key-details-page">
      <h2>Key: {keyDetails.key}</h2>
      <div className="songs-card">
        {songs.map((song) => (
          <Card key={song.id} className="song-details-card">
            <CardBody>
              <CardTitle tag="h5">{song.title}</CardTitle>
              <CardText>Artist: {song.artist}</CardText>
              <CardText>Uploaded By: {users[song.userId]?.userName}</CardText>
              <CardText>Energy rate: {keyDetails.energyRate}</CardText>
              <CardText>Promotes Happiness?: {keyDetails.promotesHappiness ? "Yes" : "No"}</CardText>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  )
}