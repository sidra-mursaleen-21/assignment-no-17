import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpeYZB0TWtf0wL78PCV_G3YjcJWJqef-s",
  authDomain: "assignment-no-17.firebaseapp.com",
  projectId: "assignment-no-17",
  storageBucket: "assignment-no-17.appspot.com",
  messagingSenderId: "932457148161",
  appId: "1:932457148161:web:04cd179d913bcccd643500"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;