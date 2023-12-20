import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAwj7iQh3xUf9uFOq_F56u8EHpgHWfY5W0",
  authDomain: "made2automate-d18a0.firebaseapp.com",
  projectId: "made2automate-d18a0",
  storageBucket: "made2automate-d18a0.appspot.com",
  messagingSenderId: "966235214339",
  appId: "1:966235214339:web:b9b1adc6b6ff59a618f436"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleprovider = new GoogleAuthProvider(app);
