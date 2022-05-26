import app from 'firebase/app';
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAWjbxPLBk9xLi8bnwF-9EQssADCkpRqN0",
    authDomain: "proyecto-extra-native.firebaseapp.com",
    projectId: "proyecto-extra-native",
    storageBucket: "proyecto-extra-native.appspot.com",
    messagingSenderId: "794169269034",
    appId: "1:794169269034:web:7c4503b14e5b2e09fc5c53"
};

app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storgae = app.storage();
export const db = app.firestore();
