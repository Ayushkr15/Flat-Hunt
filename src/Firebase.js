import firebase from "firebase/app";
import "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCzbVr4tnzl4nqnmuMCdQykQY0jgCoaLU8",
  authDomain: "house-market-b38c7.firebaseapp.com",
  databaseURL:
    "https://house-market-b38c7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "house-market-b38c7",
  storageBucket: "house-market-b38c7.appspot.com",
  messagingSenderId: "774647295458",
  appId: "1:774647295458:web:67edab8719409e8f5d1dbb",
};


firebase.initializeApp(firebaseConfig);

export default firebase;
