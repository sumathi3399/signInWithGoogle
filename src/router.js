import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ForgotPassword from "./forgot-password/ForgotPassword";
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
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
]);
export default router;
