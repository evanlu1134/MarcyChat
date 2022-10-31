const url = "http://localhost:3000/users";
const form = document.forms["create-todo-form"];
const welcome = document.getElementById("welcome");
const register = document.getElementById("register");
const login = document.getElementById("load");

// Get the modal
const modal = document.getElementById("id01");
const span = document.getElementsByClassName("close")[0];

const btn = document.getElementById("myBtn");
const cancelbtn = document.getElementById("cancelbtn");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

btn.onclick = function (event) {
  modal.style.display = "block";
  document.querySelector(".login").style.display = "none";
};

span.onclick = function () {
  modal.style.display = "none";
  document.querySelector(".login").style.display = "block";
};

cancelbtn.onclick = function () {
  modal.style.display = "none";
  document.querySelector(".login").style.display = "block";
};


login.addEventListener("click", async() => {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    //if both has values
    if(email && password){
    let response = await fetch(`${url}/all`)
    data = await response.json()
    console.log(data)
    let emailChecker = data.findIndex(ele => ele.email === email)
    let passwordChecker = data.findIndex(ele => ele.password === password)
    if(emailChecker && passwordChecker) verifyPassword() 
    }
  });
});

function verifyPassword() {
  const mailformat =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const pw = document.querySelector("#password").value;
  const email = document.querySelector("#email").value;
  let message = "Please add the correct email or password";
  //check email field
  if (email.match(mailformat)) {
    let submit = true;
    //check empty password field
    if (pw === "" && submit) {
      alert("Fill the password please!");
      return false;
    }
    //minimum password length validation
    else if (pw.length < 8 && submit) {
      alert("Password length must be at least 8 characters");
      return false;
    }
    //maximum length of password validation
    else if (pw.length > 15 && submit) {
      alert("**Password length must not exceed 15 characters");
      return false;
    } else {
      alert("Password is correct");
      window.location.href = "./index.html";
      message = "Welcome to Marcy Chat";
    }
  }
  alert(message);
}
