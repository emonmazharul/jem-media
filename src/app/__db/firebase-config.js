import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {getFirestore,collection} from 'firebase/firestore'


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.api_key,
  authDomain: process.env.auth_domain,
  projectId: process.env.project_id,
  storageBucket: process.env.storage_bucket,
  messagingSenderId: process.env.messaging_sender_id,
  appId: process.env.app_id,
  measurementId:  process.env.measurement_id
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const firbase_auth_user = await signInWithEmailAndPassword(auth, 'dev.mazharul@gmail.com', 'hellow emon how are you');
export const db = getFirestore(app);
export const message_collection = collection(db,'messages');
