/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { getUserByEmail } from "../services/UserServices.jsx";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { TuneFreq } from "../assets/icons.jsx";
import { Logo } from "../assets/logo.jsx";

export const Login = () => {
  const [email, setEmail] = useState("hershallreading@sounds.com");
  const [password, setPassword] = useState("432GTA");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    getUserByEmail(email, password).then((foundUsers) => {
      if (foundUsers.length === 1) {
        const user = foundUsers[0];
        console.log("User found:", user); // Debug log
        localStorage.setItem(
          "freq_user",
          JSON.stringify({
            id: user.id, // Ensure to include the user ID
            userName: user.userName,
            password: user.password,
          })
        );

        navigate("/");
      } else {
        window.alert("Invalid login");
      }
    });
  };

  return (
    <main className="auth-box">
      <section>
        <Form onSubmit={handleLogin}>
          <FormGroup className="mb-2">
            <h1 className="icon"> <Logo size={90} /></h1>
            <span className="body-style">Please Sign In</span>
          </FormGroup>
          <FormGroup className="mb-2">
            <Label for="email">
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(evt) => setEmail(evt.target.value)}
                placeholder="Email address"
                required
                autoFocus
              />
            </Label>
          </FormGroup>
          <FormGroup className="mb-2">
            <Label for="password">
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(evt) => setPassword(evt.target.value)}
                placeholder="Password"
                required
              />
            </Label>
          </FormGroup>
          <FormGroup className="mb-3">
            <Button color="dark" type="submit">
              Sign in
            </Button>
          </FormGroup>
        </Form>
      </section>
      <section>
        <Link className="link" to="/register">Not a member yet?</Link>
      </section>
    </main>
  );
};
