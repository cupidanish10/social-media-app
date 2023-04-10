import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCybMCLswTq2K1NIwwz5SKZIxJu2OSIIR8",
    authDomain: "social-media-app-3627f.firebaseapp.com",
    projectId: "social-media-app-3627f",
    storageBucket: "social-media-app-3627f.appspot.com",
    messagingSenderId: "770576220947",
    appId: "1:770576220947:web:ef21e9daa2f802b3dd10e6"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()
  const storage = firebase.storage()
  const db = app.firestore()
  

  export { auth, db, storage }