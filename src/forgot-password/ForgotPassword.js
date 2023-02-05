import React, { useState } from "react";
import { auth } from "../firebase/firebase";

import { sendPasswordResetEmail, confirmPasswordReset } from "firebase/auth";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: "http://localhost:3000/login",
    // This must be true.
    handleCodeInApp: true,
  };
  const sendReset = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email, actionCodeSettings)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-purple-100 to-purple-300">
      <div className="flex flex-col justify-center items-center bg-purple-300 p-16 rounded-xl">
        <h1 className="text-white text-xl font-extrabold mb-2">
          Forgot Password
        </h1>
        <form
          onSubmit={sendReset}
          className="flex flex-col justify-center items-center"
        >
          <input
            className="px-5 py-2 border-slate-50 border-2 rounded-lg w-full"
            value={email}
            placeholder="Enter EmailId"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="bg-blue-400 text-white rounded-lg px-3 py-1 mt-3 hover:bg-blue-500"
            type="submit"
          >
            continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
