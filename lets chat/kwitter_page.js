//YOUR FIREBASE LINKS
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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['message'];
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png' ></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like "+ like +"</span></button><hr>";

row = name_with_tag +message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
      } });  }); }
getData(); 
user_name = localStorage.getItem("user_name"); room_name = localStorage.getItem("room_name");
function send()
{
msg = document.getElementById("msg").value
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});

document.getElementById("msg").value = "";
}