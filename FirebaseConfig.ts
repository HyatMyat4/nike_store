import { getStorage } from "firebase/storage";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGZp8Y0QWpyAahA3eQLmR0tEYd-m7xe8g",
  authDomain: "nike-48347.firebaseapp.com",
  projectId: "nike-48347",
  storageBucket: "nike-48347.appspot.com",
  messagingSenderId: "327856148915",
  appId: "1:327856148915:web:f8b4b217c64329287e3bc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)