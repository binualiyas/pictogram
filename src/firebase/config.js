import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCByb0r3hAHIpPdmnonHlY_3qgDCNeh4j4",
  authDomain: "binu-pictogram.firebaseapp.com",
  projectId: "binu-pictogram",
  storageBucket: "binu-pictogram.appspot.com",
  messagingSenderId: "695502228205",
  appId: "1:695502228205:web:7e5692d01fa41d30985ae4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectStorage, projectFirestore, timeStamp };
