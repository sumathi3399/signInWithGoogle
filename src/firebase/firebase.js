import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAjkpG3t6XjiIfT-neZfkzpMBeHANLjELs",
  authDomain: "signin-a2cee.firebaseapp.com",
  projectId: "signin-a2cee",
  storageBucket: "signin-a2cee.appspot.com",
  messagingSenderId: "308296633574",
  appId: "1:308296633574:web:b454ca720f62e724907f27",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
