import firebase from 'firebase/compat/app';
 

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbYlvaogZoswDxmjP5DWVSrHrDaGHgXIo",
  authDomain: "shopshop-b24a4.firebaseapp.com",
  projectId: "shopshop-b24a4",
  storageBucket: "shopshop-b24a4.appspot.com",
  messagingSenderId: "370435984740",
  appId: "1:370435984740:web:9460495355fc39075a7e71",
  measurementId: "G-8RH8PL4TXT",
};

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
