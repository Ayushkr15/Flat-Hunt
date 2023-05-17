import firebase from "firebase/compat/app";
import "firebase/compat/database";

// Add your Firebase configuration object here
const firebaseConfig = {
  apiKey: "AIzaSyCUFYq9iBMXJ-gu1AUfguCX5ImAIul5zZ8",
  authDomain: "form-35a16.firebaseapp.com",
  databaseURL:
    "https://form-35a16-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "form-35a16",
  storageBucket: "form-35a16.appspot.com",
  messagingSenderId: "1028912595083",
  appId: "1:1028912595083:web:458ff4ba7a13b0c860d48e",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export the initialized Firebase database
export const firebaseDB = firebase.database();
