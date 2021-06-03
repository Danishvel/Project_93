user_name = localStorage.getItem("User_Name");
welcome = "Welcome : " + user_name;
document.getElementById("user_name").innerHTML = welcome;

function Logout() {
      localStorage.removeItem("User_Name");
      window.location = "index.html";
}