import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDhR3Qu2Z64CiLX5L1YABz6YMEC_8HPd5c",
    authDomain: "crimereportingapplicatio-75122.firebaseapp.com",
    projectId: "crimereportingapplicatio-75122",
    storageBucket: "crimereportingapplicatio-75122.appspot.com",
    messagingSenderId: "151903156507",
    appId: "1:151903156507:web:bba42ea1535241e433fbbe"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();



export { db};



