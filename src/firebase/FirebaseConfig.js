import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBy3eonSkeptbtzQSaPELxMSMsHMCqt_ME",
  authDomain: "picssaver-12ce9.firebaseapp.com",
  projectId: "picssaver-12ce9",
  storageBucket: "picssaver-12ce9.appspot.com",
  messagingSenderId: "518351395469",
  appId: "1:518351395469:web:441daaca7e0ece5b33a0c4"
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
  
