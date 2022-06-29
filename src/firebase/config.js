import app from 'firebase/app';
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC2jOJbp_ZmtwdMtXb6SsVkhWYckG_Oad4",
    authDomain: "practica-para-el-final.firebaseapp.com",
    projectId: "practica-para-el-final",
    storageBucket: "practica-para-el-final.appspot.com",
    messagingSenderId: "367325262996",
    appId: "1:367325262996:web:60a81575d8f1b8bf80f081"
  };

app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = app.storage();
export const db = app.firestore();
