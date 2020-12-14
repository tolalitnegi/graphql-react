import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyDouYv9znYuedlBDK8CrfiGnRM9HVOBse0",
    authDomain: "app-grpql.firebaseapp.com",
    projectId: "app-grpql",
    storageBucket: "app-grpql.appspot.com",
    messagingSenderId: "448271751409",
    appId: "1:448271751409:web:0f3b07e8525fbe12a33150"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const  provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
