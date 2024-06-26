import { useEffect, useState } from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import { Splash } from "../components/Splash/Splash.jsx"
import { MusicPage } from "../components/Music/MusicPage.jsx"
import { SongDetails } from "../components/Music/SongDetails.jsx"
import { NavigationBar } from "../components/Nav/NavBar.jsx"
import { Profile } from "../components/Profile/Profile.jsx"
import { SubmitPage } from "../components/Music/Submit.jsx"
import { KeyDetails } from "../components/Music/KeyDetails.jsx"

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const localUser = localStorage.getItem("freq_user")
    const parsedUser = JSON.parse(localUser)
    setCurrentUser(parsedUser)
  }, [])

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavigationBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<Splash />} />
        <Route path="MusicPage">
          <Route index element={<MusicPage currentUser={currentUser} />} />
          <Route path="songDetails/:songId" element={<SongDetails currentUser={currentUser} />} />
          <Route path="keyDetails/:keyId" element={<KeyDetails />} />
        </Route>
        <Route path="Profile" element={<Profile currentUser={currentUser} />} />
        <Route path="Submit" element={<SubmitPage currentUser={currentUser} />} />
      </Route>
    </Routes>
  )
}