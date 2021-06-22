import firebase from 'firebase'
require("@firebase/firestore")



// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDvgUO2gcSA_rEfq-RROSqWTfTyqGp0txU",
    authDomain: "storyhub-66b30.firebaseapp.com",
    projectId: "storyhub-66b30",
    storageBucket: "storyhub-66b30.appspot.com",
    messagingSenderId: "736041839894",
    appId: "1:736041839894:web:048682b496302d004a7437"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()