import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAMmNKXelbqvBRNg__8sxoc-n0Z1R2eGoQ",
  authDomain: "facebook-clone-dev-59012.firebaseapp.com",
  projectId: "facebook-clone-dev-59012",
  storageBucket: "facebook-clone-dev-59012.appspot.com",
  messagingSenderId: "664649712480",
  appId: "1:664649712480:web:4a64ae4ac4742689429405",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, storage };
export default db;
