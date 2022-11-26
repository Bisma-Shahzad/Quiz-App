// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
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
const database = getDatabase();

var currentQues = document.getElementById('currentQues')
var totalQues = document.getElementById('totalQues')
var displayQues = document.getElementById('displayQues')
var displayOpt = document.getElementById('displayOpt')
var currentIndex = 0
var marks = 0
var marksDiv = document.getElementById('marksDiv')
var showMarks = document.getElementById('showMarks')
var displayMarks = document.getElementById('displayMarks')
var displayPercent = document.getElementById('displayPercent')
var displayStatus = document.getElementById('displayStatus')
var questions = [] 
var arrlength = 0

function initRender() {
    questions = []
    const taskReference = ref(database, 'tasks/')
    onChildAdded(taskReference, function (data) {
        questions.push(data.val())
        console.log(questions)
        renderUl()
      //   arrlength = Object.keys(questions).length
      //   console.log(arrlength)
      // return arrlength
      // console.log(questions[0])
    })
}


function renderUl () {
  currentQues.innerHTML = currentIndex + 1;
    totalQues.innerHTML = questions.length;
    displayQues.innerHTML = questions[currentIndex].question
    
    displayOpt.innerHTML = ""
    for (var i = 0; i < questions[currentIndex].options.length; i++) {
        displayOpt.innerHTML += `<div class="col-md-6">
        <button onclick="checkResult('${questions[currentIndex].options[i]}', '${questions[currentIndex].correctAns}')" class="btn btn-outline-primary w-100 my-1 fs-3">${questions[currentIndex].options[i]}</button>
    </div>`
    }
}

initRender()

// function nextQuestion() {
//   if (currentQues == totalQues) {
//       marksDiv.style.display = 'block'
//   }
//   else {
//       currentIndex++
//       initRender()
//   }
// }

window.checkResult = function(a, b) {
  // if (a == b) {
      // ++marks
      console.log(b)
      currentIndex++
      initRender()
  // }
  // nextQuestion()
}


