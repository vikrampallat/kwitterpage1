// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCep0yHhPRsgAspL_ua8cyhdUqKWEEvXpk",
      authDomain: "kwitter-4707f.firebaseapp.com",
      databaseURL: "https://kwitter-4707f-default-rtdb.firebaseio.com",
      projectId: "kwitter-4707f",
      storageBucket: "kwitter-4707f.appspot.com",
      messagingSenderId: "628004416890",
      appId: "1:628004416890:web:98f6386c400438c95cfac3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter_page.html";
}
