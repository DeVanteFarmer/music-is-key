/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getAllSongs, getAllKeys } from "../../services/SongServices.jsx"
import { getUserById } from "../../services/UserServices.jsx"
import { Card, CardBody, CardTitle, CardText } from "reactstrap"
import './KeyDetails.css'

export const KeyDetails = () => {
  const { keyId } = useParams()
  const [keyDetails, setKeyDetails] = useState(null)
  const [songs, setSongs] = useState([])
  const [users, setUsers] = useState({})
  const [allKeys, setAllKeys] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all keys
        const keysArray = await getAllKeys()
        setAllKeys(keysArray)
        const keyData = keysArray.find(key => key.id === parseInt(keyId))
        setKeyDetails(keyData)

        if (keyData) {
          // Fetch all songs
          const songsArray = await getAllSongs()
          // Filter songs based on key value
          const filteredSongs = songsArray.filter(song => {
            const songKey = keysArray.find(key => key.id === song.keyId)
            return songKey && songKey.key === keyData.key
          })
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
        }
      } catch (error) {
        console.error("Error fetching key or songs data:", error)
      }
    }
    fetchData()
  }, [keyId])

  if (!keyDetails) return <div>Loading...</div>

  return (
    <div className="song-details-container">
      <div className="key-details-page">
        <h2 className="music-title">Key: {keyDetails.key}</h2>
        <div className="songs-card">
          {songs.map((song) => {
            const songKeyDetails = allKeys.find(key => key.id === song.keyId)
            return (
              <Card key={song.id} className="song-details-card">
                <CardBody>
                  <CardTitle tag="h5">{song.title}</CardTitle>
                  <CardText>Artist: {song.artist}</CardText>
                  <CardText>Uploaded By: {users[song.userId]?.userName}</CardText>
                  <CardText>Energy rate: {songKeyDetails?.energyRate}</CardText>
                  <CardText>Promotes Happiness?: {songKeyDetails?.promotesHappiness ? "Yes" : "No"}</CardText>
                </CardBody>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
