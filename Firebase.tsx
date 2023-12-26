import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAqnWUZdmj0wNzkhrxel-DHHxtCldi5ido",
  authDomain: "loginbech.firebaseapp.com",
  projectId: "loginbech",
  storageBucket: "loginbech.appspot.com",
  messagingSenderId: "442194751333",
  appId: "1:442194751333:web:294f3ff94fcf0d3659fb8c",
  measurementId: "G-WCY7JCRLBX"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

