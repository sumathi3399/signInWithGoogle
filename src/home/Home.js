import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col p-3 h-screen">
      <div className="flex justify-end items-center">
        {" "}
        <button
          className="bg-red-200 rounded-md px-3 py-1"
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
      <h1>Name: {localStorage.getItem("name")}</h1>
      <h1>Email: {localStorage.getItem("email")}</h1>
    </div>
  );
};

export default Home;
