import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({  
        apiKey: "AIzaSyAjBTvBXwnhcFugKyKd_d0qqZefKs3il1c",     
        authDomain: "catch-of-the-day-1313.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-1313-default-rtdb.firebaseio.com",     
})

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;