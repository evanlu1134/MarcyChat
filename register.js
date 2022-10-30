const url = "http://localhost:3000/register";
const form = document.forms["create-todo-form"];
                 
//Modal
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];
 
btn.onclick = function() {
  modal.style.display = "block";
}

// (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// Closes at any click
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const first_name = document.querySelector("#firstName").value;
  const last_name = document.querySelector("#lastName").value;

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  let token="a"
  const raw = JSON.stringify({
    first_name,
    last_name,
   email,password
  });
  const requestOptions = {
    method: "POST",
    headers:  myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(url, requestOptions);
  verifyPassword()
 
});
function verifyPassword() {
  const mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const pw = document.querySelector("#password").value;
  const email = document.querySelector("#email").value;
  let message = "Please add the correct email or password";
  //check email field
  if(email.match(mailformat)) {
  let submit = true
  console.log(pw);
  console.log(email)
  console.log(submit === true);
  //check empty password field
  if (pw === "" && submit) {
    alert( "Fill the password please!");
    return false;
  }
  //minimum password length validation
  else if (pw.length < 8 && submit) {
    alert("Password length must be atleast 8 characters")
    return false;
  }
  //maximum length of password validation
  else if (pw.length > 15 && submit) {
    alert("**Password length must not exceed 15 characters")
    return false;
  } else {
    alert("Password is correct");
    window.location.href = "./login.html";
    message = "Please Sign In"
  }
}
alert(message);
}