var firebaseConfig = {
  apiKey: "AIzaSyBudIMeTFdzQ1HNSTOrGCfr3WnTa2y-Ij8",
  authDomain: "medtortest.firebaseapp.com",
  databaseURL: "https://medtortest.firebaseio.com",
  projectId: "medtortest",
  storageBucket: "medtortest.appspot.com",
  messagingSenderId: "423809348674",
  appId: "1:423809348674:web:0e1a0f78ffb4db0e59a9db",
  measurementId: "G-R464GQH3TF"
};
firebase.initializeApp(firebaseConfig);

var databaseRef = firebase.database().ref();
var functions = firebase.functions();

var upperLogInBtn = document.getElementById('upperLogIn');

console.log("working");

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    //user signed in
    console.log("here");
    // upperLogInBtn.display = 'none';
    // upperLogInBtn.disable = true;

    //upperLogOutBtn.disable = false;
    upperLogInBtn.innerHTML = "Log Out";
    //upperLogInBtn.href = "medtorHome.html";
    upperLogInBtn.onclick = function(){
      logOut(event);
    };
    // upperLogItem.style.background = "#27abff"
    // upperLogItem.style.borderColor = "#27abff"
    //document.getElementById("itemLogIn").style.background = #27abff;

  } else {
    //user not signed in
    console.log("didHere2");
    upperLogInBtn.innerHTML = "Log In";
    upperLogInBtn.href = "medtorAuthPass.html";
    upperLogInBtn.onclick = function(){
      null;
    };
    // upperLogItem.style.background = "#1975af"
    // upperLogItem.style.backgroundColor = "#1975af"
    // upperLogInBtn.innerHTML = "Log In";
    // upperLogInBtn.href = "medtorAuthPass.html";
    // upperLogInBtn.onClick = null;
    //document.getElementById("itemLogIn").style.background = #1975af;
  }
});

function logOut(e) {
  e = e || window.event;
  e.preventDefault();
  firebase.auth().signOut().then(function() {
    window.location.href = "medtorHome.html";
  }).catch(function(error) {
    // An error happened.
  });
}
