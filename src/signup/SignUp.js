import React from "react";
import "./../App.css";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: "http://localhost:3000/login",
  // This must be true.
  handleCodeInApp: true,
};

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [passwordconfirm, setPasswordconfirm] = useState("");

  const [confirmPassword, setConfirmPassword] = useState(false);
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then((user) => {
      updateProfile(user.user, { displayName: username }).then(() => {
        sendEmailVerification(user.user, actionCodeSettings)
          .then((data) => console.log(data))
          .catch((err) => console.log(err));
      });

      setEmail("");
      setUsername("");
      setPassword("");
      setPasswordconfirm("");
      toast("Email verification Link sent!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
    // navigate("/login");
  };
  //   const navigate = useNavigate();
  return (
    <div className="signUp flex flex-col justify-center items-center bg-purple-300 p-12 rounded-xl">
      <h1 className="text-white text-xl font-extrabold mb-2">Sign Up</h1>
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={signUp}
      >
        <input
          className="p-3 m-2 rounded-md"
          value={username}
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="p-3 m-2 rounded-md"
          value={email}
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="p-3 m-2 rounded-md"
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="p-3 m-2 rounded-md"
          value={passwordconfirm}
          type="password"
          placeholder="Repeat password"
          onChange={(e) => {
            setPasswordconfirm(e.target.value);
            setConfirmPassword(password === passwordconfirm);
            console.log(confirmPassword);
          }}
        />
        <button
          className="bg-orange-300 text-white px-4 py-1 m-2 rounded-md hover:bg-orange-400"
          type="submit"
        >
          Sign Up
        </button>
      </form>
      <p className="text-white">
        Already Have an Account
        <Link className="underline text-blue-500 ml-1" to="/login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
