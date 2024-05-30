import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyCs14NFZJTBV5I7wxM4Z7dND5ExakJYqFw",
    authDomain: "class-work-2d953.firebaseapp.com",
    projectId: "class-work-2d953",
    storageBucket: "class-work-2d953.appspot.com",
    messagingSenderId: "601529970867",
    appId: "1:601529970867:web:59d52ebde39d52a1f380c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// TODO: Initialize Cloud Firestore, Cloud Storage and get a reference to the service
export const storage = getStorage(app)
export const db = getFirestore(app)

const firestore = getFirestore(app);

export { firestore };