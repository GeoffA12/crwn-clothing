import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyCGGnTdG2YhcEgZsBAjcjvdjOcRLZsUQ-A",
  authDomain: "crwn-db-3b420.firebaseapp.com",
  databaseURL: "https://crwn-db-3b420.firebaseio.com",
  projectId: "crwn-db-3b420",
  storageBucket: "crwn-db-3b420.appspot.com",
  messagingSenderId: "1003503032281",
  appId: "1:1003503032281:web:c75e203ead1be4b11b6bc8",
  measurementId: "G-7TC3J01Z8K",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

/*
Firebase firestore method to validate whether a user is authenticated by checking in our database if their 
id exists. 
*/
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user:" + error.message);
    }
  }
  return userRef;
};
export default firebase;
