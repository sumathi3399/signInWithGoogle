import React, { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signIn = () => {
    signInWithPopup(auth, provider).then((data) => {
      const name = data.user.displayName;
      console.log(name);
      const email = data.user.email;
      console.log(data);
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      navigate("/home");
    });
  };
  const signInWithEmailandPass = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((data) => {
        console.log(data);
        const name = data.user.displayName;
        const email = data.user.email;
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        navigate("/home");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center bg-purple-300 p-12 rounded-xl">
        <h1 className="text-white text-xl font-extrabold mb-2">Login</h1>
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={signInWithEmailandPass}
        >
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
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-orange-200 text-white px-4 py-1 m-2 rounded-md"
            type="submit"
          >
            Sign In
          </button>
        </form>
        {/* <p className="p-1">---------or---------</p> */}

        <button onClick={signIn}>Sign in With Google</button>
        <p className="text-white">
          Dont Have an Account
          <Link className="underline text-blue-500 ml-1" to="/">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
