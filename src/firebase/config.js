import firebase from "firebase/app";
import "firebase/firestore";
import config from "../config";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = config.FIREBASE_CONFIG;

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

export { projectFirestore };
