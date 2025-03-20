import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getDatabase} from 'firebase/database'
const firebaseConfig = {
  apiKey: "AIzaSyCDIi4SfMwLqedlQorP66a0pbEhmeml_wQ",
  authDomain: "formsproject-d16ed.firebaseapp.com",
  projectId: "formsproject-d16ed",
  storageBucket: "formsproject-d16ed.firebasestorage.app",
  messagingSenderId: "628929687485",
  appId: "1:628929687485:web:0d0bbf3675a8f9f1fa6cd4",
  measurementId: "G-60RWBPYS4Y"
};

const app = initializeApp(firebaseConfig);
export const author=getAuth(app)
export const db=getDatabase(app)