import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPYxJpN-6hEM38_EZuTM_CUV5zXGe-3hM",
  authDomain: "blogproject-33dd5.firebaseapp.com",
  projectId: "blogproject-33dd5",
  storageBucket: "blogproject-33dd5.appspot.com",
  messagingSenderId: "597350651644",
  appId: "1:597350651644:web:94d1eff762500a8fc6a979"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();