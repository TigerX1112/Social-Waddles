user_name = localStorage.getItem("username");
room_name = localStorage.getItem("room_name");

function send() {
    firebase.database().ref(room_name).update({
        name:user_name,
        message:msg,
        like:0
    });
}

function logout() {
    window.location = "sw_room.html";
}