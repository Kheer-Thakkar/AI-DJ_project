

  function adduser(){
    user_name=document.getElementById("login_username").value;
    localStorage.setItem("login_username",user_name);
    window.location="index.html";
}