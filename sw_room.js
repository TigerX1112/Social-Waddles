const firebaseConfig = {
    apiKey: "AIzaSyC4RhfZNZq1Jtva5oJ4wUBxipk0jTkS6AQ",
    authDomain: "social-waddles.firebaseapp.com",
    projectId: "social-waddles",
    storageBucket: "social-waddles.appspot.com",
    messagingSenderId: "148210618886",
    appId: "1:148210618886:web:b3fd29be6caeb93f2aa987"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("username");
document.getElementById("user_update").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "sw_page.html";
}

    function getData() {firebase.database().ref("/").on('value',
    function(snapshot) {document.getElementById("output").innerHTML =
    "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
        //Start code
        console.log("Room name - " + Room_names);
        row = "<div class='room_div' id='"+Room_names+"' onclick='redrecitToRoom(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("rooms_div").innerHTML += row;
        //End code
    });});}
getData();

function redrecitToRoom(name) {
    console.log(name);

    localStorage.setItem("room name", name);

    window.location = "sw_page.html";
}