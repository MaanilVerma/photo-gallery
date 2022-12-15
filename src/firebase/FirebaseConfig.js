import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCGTCizIFVUvpM6xpzF5qywDZTfZrszAik",
  authDomain: "photo-gallery-5ddc3.firebaseapp.com",
  projectId: "photo-gallery-5ddc3",
  storageBucket: "photo-gallery-5ddc3.appspot.com",
  messagingSenderId: "836671529882",
  appId: "1:836671529882:web:bb32c065eb4183f7355023"
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
  
