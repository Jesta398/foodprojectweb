import firebase, { initializeApp } from "firebase/app";
import 'firebase/storage';
import 'firebase/auth'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
   apiKey: "AIzaSyBPpn7YN6ytpvNB1BSXBCIlbW8D--CnwhE",
   authDomain: "foodhub-e4d05.firebaseapp.com",
   projectId: "foodhub-e4d05",
   storageBucket: "foodhub-e4d05.appspot.com",
   messagingSenderId: "497185462406",
   appId: "1:497185462406:web:aebf75cfb2a53f797d5907",
   measurementId: "G-WB1D1NY989"
 };

const fireDb = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();



export { fireDb, auth, db, storage };

   

