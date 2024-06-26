/* eslint-disable no-unused-vars */
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Register.css"
import { Button, Form, FormGroup, Input } from "reactstrap"
import { createUser, getUserByEmail } from "../services/UserServices.jsx"
import { TuneFreq } from "../assets/icons.jsx"


export const Register = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    userName: "",
    img: ""
  });
  let navigate = useNavigate()

  const registerNewUser = () => {
    createUser(user).then((createdUser) => {
      // eslint-disable-next-line no-prototype-builtins
      if (createdUser.hasOwnProperty("id")) {
        // Redirect to login page after successful registration
        navigate("/login")
      }
    })
  }

  const handleRegister = (e) => {
    e.preventDefault();
    getUserByEmail(user.email).then((response) => {
      if (response.length > 0) {
        // Duplicate email. No good.
        window.alert("Account with that email address already exists")
      } else {
        // Good email, create user.
        registerNewUser()
      }
    })
  }

  const updateUser = (evt) => {
    const copy = { ...user }
    copy[evt.target.id] = evt.target.value
    setUser(copy)
  }

  return (
    <main className="auth-box">
      <Form onSubmit={handleRegister}>
        <FormGroup className="mb-2">
          <h1 className="icon"> <TuneFreq /></h1>
          <span className="body-style">Register Here</span>
        </FormGroup>
        <FormGroup className="mb-3">
          <Input
            onChange={updateUser}
            type="text"
            id="userName"
            placeholder="Create a user name"
            required
            autoFocus
          />
        </FormGroup>
        <FormGroup className="mb-3">
          <Input
            onChange={updateUser}
            type="email"
            id="email"
            placeholder="Enter your email address"
            required
          />
        </FormGroup>
        <FormGroup className="mb-3">
          <Input
            onChange={updateUser}
            type="password"
            id="password"
            placeholder="Create a password"
            required
          />
        </FormGroup>
        <FormGroup className="mb-3">
          <Input
            onChange={updateUser}
            type="avatar"
            id="img"
            placeholder="Upload your avatar photo"
            required
          />
        </FormGroup>
        <FormGroup>
          <Button variant="light" type="submit">
            Register
          </Button>
        </FormGroup>
      </Form>
    </main>
  )
}