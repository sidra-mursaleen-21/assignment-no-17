import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../config/firebase";
import Input from "../../component/input";
import Button from "../../component/button";

const Login = () => {
  const [userInformation, setUserInformation] = useState({});
  const navigate = useNavigate();

  const inputFields = (key, value) => {
    setUserInformation({ ...userInformation, [key]: value });
  };

  const logIn = (e) => {
    e.preventDefault();

    const { email, password } = userInformation;

    // sign in existigg user
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/products");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("you don't have an account");
      });
  };

  return (
    <div className="layoutContainer">
      <div className="container">
        <h1>log in</h1>
        <form onSubmit={logIn}>
          <Input
            onChange={(e) => inputFields(e.target.id, e.target.value)}
            id="username"
            required={true}
            type="text"
            label="user name"
            placeholder="write your username"
          />
          <Input
            onChange={(e) => inputFields(e.target.id, e.target.value)}
            id="email"
            required={true}
            type="email"
            label="email"
            placeholder="write your email"
          />
          <Input
            onChange={(e) => inputFields(e.target.id, e.target.value)}
            id="password"
            required={true}
            type="password"
            label="password"
            placeholder="write your password"
          />
          <p>
            don't have an account ? <Link to="/signup">SignUp</Link>
          </p>
          <Button type="submit" text="log in" />
        </form>
      </div>
    </div>
  );
};

export default Login;
