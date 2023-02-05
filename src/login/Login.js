import React, { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  confirmPasswordReset,
} from "firebase/auth";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.password) {
    errors.password = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      signInWithEmailandPass(values.email, values.password);
      console.log(values);
    },
  });
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

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
  const signInWithEmailandPass = (email, password) => {
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
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-purple-300 to-purple-600">
      <div className="flex flex-col justify-center items-center bg-purple-300 p-12 rounded-xl">
        <h1 className="text-white text-xl font-extrabold mb-2">Login</h1>
        <form
          className="flex flex-col justify-center items-center"
          // onSubmit={signInWithEmailandPass}
          onSubmit={formik.handleSubmit}
        >
          <input
            className="p-3 mt-2 rounded-md"
            // value={email}
            type="text"
            placeholder="Email"
            // onChange={(e) => setEmail(e.target.value)}
            style={formik.errors.email ? { border: "1px solid red" } : {}}
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <div style={{ color: "red", textAlign: "left" }}>
              * {formik.errors.email}
            </div>
          ) : null}

          <input
            className="p-3 mt-2 rounded-md"
            // value={password}
            type="password"
            placeholder="Password"
            // onChange={(e) => setPassword(e.target.value)}
            style={formik.errors.password ? { border: "1px solid red" } : {}}
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.errors.password ? (
            <div style={{ color: "red", textAlign: "start" }}>
              * {formik.errors.password}
            </div>
          ) : null}

          <Link className="text-right text-blue-400" to="/forgot-password">
            <p>Forgot Password</p>
          </Link>

          <button
            className="bg-orange-300 text-white px-4 py-1 m-2 rounded-md w-full hover:bg-orange-400"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <button
          data-tooltip-target="tooltip-right"
          data-tooltip-placement="right"
          type="button"
          className="bg-white p-1 rounded-3xl mb-4 "
          onClick={signIn}
        >
          <img
            className="w-6 h-6 hover:text-white"
            src="https://res.cloudinary.com/dbfoeqkyr/image/upload/v1661800447/Sumathi%20History%20React/google_drnybl.png"
            alt="google"
          />
        </button>

        {/* <p className="p-1">---------or---------</p> */}

        <p className="text-white mt-1">
          Dont Have an Account
          <Link className="underline text-blue-500 ml-1" to="/">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
