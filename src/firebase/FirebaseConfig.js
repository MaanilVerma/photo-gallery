import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBjwJQUiG6hyGmk2DuoHSpVWSJc5v1JrXE",
    authDomain: "photogallery-27b2c.firebaseapp.com",
    projectId: "photogallery-27b2c",
    storageBucket: "photogallery-27b2c.appspot.com",
    messagingSenderId: "810465101962",
    appId: "1:810465101962:web:577b563cf84f02bfe24573"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Initialize Storage Service
  const projectStorage = firebase.storage();

  //Initialize Firestore Service
  const projectFirestore = firebase.firestore();

  // Creating timestamp variable to extract Upload time from Firebase so that we can show images accordingly. 
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  //Exporting them for further interaction with Firebase.
  export { projectStorage, projectFirestore, timestamp };
  
