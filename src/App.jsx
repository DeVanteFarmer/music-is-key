/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Register } from './auth/Register.jsx'
import { Authorized } from './views/Authorized.jsx'
import { Login } from './auth/Login.jsx'
import { ApplicationViews } from './views/ApplicationView.jsx'
import './App.css'
import { LoginNav } from './components/Nav/LoginNav.jsx'

export const App = () => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const user = localStorage.getItem("freq_user");
    console.log("Raw user data from localStorage:", user) // Debug log
    if (user) {
      try {
        const parsedUser = JSON.parse(user)
        setCurrentUser(parsedUser)
        console.log("Parsed user:", parsedUser) // Debug log
      } catch (error) {
        console.error("Failed to parse user data:", error)
      }
    }
  }, [])

  return (
    <>
      <LoginNav />
      <div className="main-content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="*"
            element={
              <Authorized>
                <ApplicationViews currentUser={currentUser} />
              </Authorized>
            }
          />
        </Routes>
      </div>
    </>
  )
}
