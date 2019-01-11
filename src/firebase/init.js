import firebase from "firebase";
import firestore from "firebase/firestore";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBMUSS_id3ochFG8kPibjZqTOx4BJMoItc",
  authDomain: "vuetutorial-7a2e1.firebaseapp.com",
  databaseURL: "https://vuetutorial-7a2e1.firebaseio.com",
  projectId: "vuetutorial-7a2e1",
  storageBucket: "vuetutorial-7a2e1.appspot.com",
  messagingSenderId: "556669889211"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

// export firestore database
export default firebaseApp.firestore();
