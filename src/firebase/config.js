import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPIraZJNwUUFQ0FHL3L6RhZCATxaA8VTg",
  authDomain: "imyt-io-blog.firebaseapp.com",
  projectId: "imyt-io-blog",
  storageBucket: "imyt-io-blog.appspot.com",
  messagingSenderId: "1064550537268",
  appId: "1:1064550537268:web:bc971b6ba19a960a57d261",
  measurementId: "G-FWJCQG631V",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

export { projectFirestore };
