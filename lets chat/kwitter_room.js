
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
     apiKey: "AIzaSyDfI0-uNdcvVSawDSGPDO9mZY-AlTXIX9w",
     authDomain: "let-s-chat-e5148.firebaseapp.com",
     databaseURL: "https://let-s-chat-e5148-default-rtdb.firebaseio.com",
     projectId: "let-s-chat-e5148",
     storageBucket: "let-s-chat-e5148.appspot.com",
     messagingSenderId: "4593783331",
     appId: "1:4593783331:web:38edfc2733ad6bb9f09796"
   };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig); 

    user_name = localStorage.getItem("user_name"); document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom()
{
room_name = document.getElementById("room_name").value;
 firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
 });

localStorage.setItem("room_name",   room_name);

window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
 console.log("room Name - " + Room_names);
row="<div class='room_name' id="+Room_names+" onclick ='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html"
}
 function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location ="index.html";

 }