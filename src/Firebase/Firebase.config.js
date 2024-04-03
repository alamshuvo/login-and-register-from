// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjBm_TNIJurc01uU_qr5IP3gioDWR41fE",
  authDomain: "connection-with-us.firebaseapp.com",
  projectId: "connection-with-us",
  storageBucket: "connection-with-us.appspot.com",
  messagingSenderId: "812229459302",
  appId: "1:812229459302:web:1f8d29b6a55d3a489a9ca7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;