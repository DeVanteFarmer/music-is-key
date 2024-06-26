/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Submit.css'

export const SubmitPage = () => {
  const [title, setTitle] = useState('')
  const [artist, setArtist] = useState('')
  const [key, setKey] = useState('')
  const [energyRate, setEnergyRate] = useState('')
  const [happiness, setHappiness] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const user = JSON.parse(localStorage.getItem('freq_user'))
      if (!user || !user.id) {
        throw new Error('User is not logged in')
      }

      const promotesHappiness = parseInt(happiness) >= 70

      // Generate unique IDs
      const newSongId = Date.now() // Unique ID for the song
      const newKeyId = newSongId // Using the same timestamp for simplicity

      // Create a new song object
      const newSong = {
        id: newSongId,
        title,
        artist,
        userId: user.id,
        keyId: newKeyId
      }

      console.log("New Song:", newSong) // Debugging

      // Save the song to local storage
      const songs = JSON.parse(localStorage.getItem('songs')) || []
      songs.push(newSong)
      localStorage.setItem('songs', JSON.stringify(songs))
      console.log("Updated Songs:", songs) // Debugging

      // Create a new key object
      const newKey = {
        id: newKeyId,
        songId: newSongId,
        key,
        energyRate: parseInt(energyRate),
        promotesHappiness,
      }

      console.log("New Key:", newKey) // Debugging

      // Save the key to local storage
      const keys = JSON.parse(localStorage.getItem('keys')) || []
      keys.push(newKey)
      localStorage.setItem('keys', JSON.stringify(keys))
      console.log("Updated Keys:", keys) // Debugging

      navigate('/MusicPage')
    } catch (error) {
      console.error('Error submitting song', error)
    }
  }

  return (
    <div className="submit-page">
      <p>
        To find the Key, EnergyRate, and Happiness levels of your song, visit <a href="https://tunebat.com/" target="_blank" rel="noopener noreferrer"> this key analyzer </a>. Once you have the information, return here to complete the submission.
      </p>
      <h2>Submit a Song</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="artist">Artist:</label>
          <input
            type="text"
            id="artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="key">Key:</label>
          <input
            type="text"
            id="key"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="energyRate">Energy Rate:</label>
          <input
            type="number"
            id="energyRate"
            value={energyRate}
            onChange={(e) => setEnergyRate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="happiness">Happiness:</label>
          <input
            type="number"
            id="happiness"
            value={happiness}
            onChange={(e) => setHappiness(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}