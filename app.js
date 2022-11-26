// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5Hmr9PPV82Ayfs-P35SLgsmXzHiFSTzE",
  authDomain: "progect1-a082c.firebaseapp.com",
  projectId: "progect1-a082c",
  storageBucket: "progect1-a082c.appspot.com",
  messagingSenderId: "976254712684",
  appId: "1:976254712684:web:dc07ec3f8e97c2223a9149",
  measurementId: "G-6R3K5HEZE9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

var email = document.getElementById('email')
var password = document.getElementById('password')

window.login = function (e) {
    e.preventDefault()
    var obj = {
        email: email.value,
        password: password.value,
    }

    signInWithEmailAndPassword(auth, obj.email, obj.password)
        .then(function (success) {
            console.log(success.user.uid);
            window.location.replace('admin.html')
        })
        .catch(function (err) {
            // console.log(err);
            alert("Enter correct email address or password")
        });

    console.log(model)
    email.value = ''
    password.value = ''
}