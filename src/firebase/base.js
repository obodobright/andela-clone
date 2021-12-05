import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const config = {
    apiKey: "AIzaSyDI1B8ptdSggr2TQLIywTSqMyqVM_Np3CY",
    authDomain: "andela-clo.firebaseapp.com",
    projectId: "andela-clo",
    storageBucket: "andela-clo.appspot.com",
    messagingSenderId: "902216767462",
    appId: "1:902216767462:web:aee4cede5aa2484800a827",
};

const app = initializeApp(config);
const firestore = getFirestore();
const auth = getAuth();

export { app, firestore, auth };