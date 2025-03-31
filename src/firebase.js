import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDyZgY540up8z0DZ0ayPcOx4mAJaZ9h8jc",
  authDomain: "clone-a2af7.firebaseapp.com",
  projectId: "clone-a2af7",
  storageBucket: "clone-a2af7.firebasestorage.app",
  messagingSenderId: "779212051044",
  appId: "1:779212051044:web:5b9529aeb045a5f6934571",
  measurementId: "G-04MC77JDJC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();
export const db=getFirestore(app)
export const provider=new GoogleAuthProvider()