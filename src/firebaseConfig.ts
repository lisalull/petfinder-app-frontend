import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCUWfUcSO6BjUSTcSgnfurh4-v73kwvVK8",
  authDomain: "petfinder-app-e0ba7.firebaseapp.com",
  projectId: "petfinder-app-e0ba7",
  storageBucket: "petfinder-app-e0ba7.appspot.com",
  messagingSenderId: "455940449663",
  appId: "1:455940449663:web:637e29afe7180eec4a264a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();
export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}
export const storage = getStorage(app);
