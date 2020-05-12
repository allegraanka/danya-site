import firebase from 'firebase/app'; // you always need to import this firebase keyword to use the utility library
import 'firebase/firestore';
import 'firebase/auth';

// initialize firebase credentials in app configuration
const config = {
    apiKey: "AIzaSyAMFNwo7Gmt1bmKrOudgfF8_ASuIwXgdTM",
    authDomain: "danya-db.firebaseapp.com",
    databaseURL: "https://danya-db.firebaseio.com",
    projectId: "danya-db",
    storageBucket: "danya-db.appspot.com",
    messagingSenderId: "323299994882",
    appId: "1:323299994882:web:16daa861e23616905d261b",
    measurementId: "G-LER8L0H3PZ"
  };

  // using firestore database, take user auth object from Google and store it in our DB
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error) {
        console.log("error creating user: ", error.message);
      }
    }
    return userRef;
  }

  // pass specific config values into this firebase init method
  firebase.initializeApp(config);

  export const firestore = firebase.firestore();
  export const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  // in case we want access to the whole library at some point, export firebase
  export default firebase;