// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GithubAuthProvider } from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNaPzhcx1iXkWwdocDnEZYIcQofu0KV6M",
  authDomain: "cprg306-assignments-32d2a.firebaseapp.com",
  projectId: "cprg306-assignments-32d2a",
  storageBucket: "cprg306-assignments-32d2a.firebasestorage.app",
  messagingSenderId: "818068541229",
  appId: "1:818068541229:web:6859c1e8383a2525730da4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const provider = new GithubAuthProvider()