import SignUp from "./signup/SignUp";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <SignUp />
      <ToastContainer />
    </div>
  );
}

export default App;
