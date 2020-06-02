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
export default firebase;
