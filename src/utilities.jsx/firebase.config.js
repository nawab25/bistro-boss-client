// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAqnffxx-1-eKO3XbZPLUns4Z4EmWX7kQ",
  authDomain: "bistro-boss-194a9.firebaseapp.com",
  projectId: "bistro-boss-194a9",
  storageBucket: "bistro-boss-194a9.appspot.com",
  messagingSenderId: "403328375588",
  appId: "1:403328375588:web:d6da683f990c70cb6231b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;