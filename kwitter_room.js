var firebaseConfig = {
  apiKey: "AIzaSyAffcJQq8rEc9rXHjslZbPCpBJltq29cHE",
  authDomain: "let-s-chat-web-app-222ef.firebaseapp.com",
  databaseURL: "https://let-s-chat-web-app-222ef-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-web-app-222ef",
  storageBucket: "let-s-chat-web-app-222ef.appspot.com",
  messagingSenderId: "809747828668",
  appId: "1:809747828668:web:c36afe60e3d504177865b9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}