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

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, addnlData) => {
  if (!userAuth) return;

  const userDocRef = firestore.doc(`/users/${userAuth.uid}`);

  const snapshot = await userDocRef.get();


  console.log(`Snapshot of user is ${userAuth.uid}`, snapshot);

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const currDate = new Date();

    try {
      await userDocRef.set({
        displayName,
        email,
        createdAt: currDate,
        ...addnlData
      })
    } catch (e) {
      console.log('error creating data', e.message);
    }
  }

  return userDocRef;
}

export default firebase;
