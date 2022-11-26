// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { getDatabase, ref, set, push, onChildAdded } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";


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
const database = getDatabase();

var question = document.getElementById('question')
var option1 = document.getElementById('option1')
var option2 = document.getElementById('option2')
var option3 = document.getElementById('option3')
var option4 = document.getElementById('option4')
var correctAns = document.getElementById('correctAns')

var questions = []
var obj = {}
var optionarr = []
// var currentQues = document.getElementById('currentQues')
// var totalQues = document.getElementById('totalQues')
// var displayQues = document.getElementById('displayQues')
// var displayOpt = document.getElementById('displayOpt')
// var currentIndex = 0
// var marks = 0
// var marksDiv = document.getElementById('marksDiv')
// var showMarks = document.getElementById('showMarks')
// var displayMarks = document.getElementById('displayMarks')
// var displayPercent = document.getElementById('displayPercent')
// var displayStatus = document.getElementById('displayStatus')

window.logout = function () {
    signOut(auth)
        .then(function () {
            console.log("Logout Successfully");
            window.location.href = "index.html";
        })
        .catch(function (err) {
            console.log(err);
        });
}

function checkAuthentication() {
    onAuthStateChanged(auth, function (user) {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            // ...
        } else {
            // User is signed out
            // ...
            window.location.href = 'index.html'
        }
    });
}

checkAuthentication()

window.nextQues = function(e){
    e.preventDefault()
    obj = {}
    optionarr = []
    obj.question = question.value
    optionarr.push(option1.value)
    optionarr.push(option2.value)
    optionarr.push(option3.value)
    optionarr.push(option4.value)
    obj.options = optionarr
    obj.correntAns = correctAns.value
    // console.log(obj)
    questions.push(obj)
    console.log(questions)
    question.value = ''
    option1.value = ''
    option2.value = ''
    option3.value = ''
    option4.value = ''
    correctAns.value = ''
}

window.quizForm = function () {
    obj = {}
    optionarr = []
    obj.question = question.value
    optionarr.push(option1.value)
    optionarr.push(option2.value)
    optionarr.push(option3.value)
    optionarr.push(option4.value)
    obj.options = optionarr
    obj.correntAns = correctAns.value
    // console.log(obj)
    questions.push(obj)
    console.log(questions)
    // const keyRef = ref(database, 'task/')
    // questions.id = push(keyRef).key
    // console.log(questions.id)

    const taskReference = ref(database, `tasks/`)
    set(taskReference, questions)
} 

