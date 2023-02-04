import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./home/Home";
import Login from "./login/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);
export default router;
