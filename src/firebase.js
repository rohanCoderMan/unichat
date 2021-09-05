import firebase from "firebase/app";
import "firebase/auth";


export const auth=firebase.initializeApp({
        apiKey: "AIzaSyCqHVY5m5PABykfR-PFIr4hragvkIcwvBs",
        authDomain: "unichat-420b7.firebaseapp.com",
        projectId: "unichat-420b7",
        storageBucket: "unichat-420b7.appspot.com",
        messagingSenderId: "737256602215",
        appId: "1:737256602215:web:02cca8f8e6b4ab5b48f2c2",
        measurementId: "G-2M1KG5S09Z"
}).auth();