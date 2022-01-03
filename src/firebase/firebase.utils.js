import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDckgvlvGycEBOHsXAkoLD5s2Iaq4_PcKg",
    authDomain: "ecommerce-a-to-z.firebaseapp.com",
    projectId: "ecommerce-a-to-z",
    storageBucket: "ecommerce-a-to-z.appspot.com",
    messagingSenderId: "79430661462",
    appId: "1:79430661462:web:3b121764b2d02be89e92f7",
    measurementId: "G-Z1Z5DYJ9N2"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;