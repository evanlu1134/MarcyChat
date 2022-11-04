const url = "https://scary-coffin-46937.herokuapp.com/users";
const form = document.forms["create-todo-form"];

//Modal
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

// (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// Closes at any click
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  verifyPassword();
});

async function verifyPassword() {
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  let first_name= document.querySelector("#firstName").value;
  let last_name = document.querySelector("#lastName").value;
  first_name = first_name.charAt(0).toUpperCase() + first_name.slice(1)
  last_name = last_name.charAt(0).toUpperCase() + last_name.slice(1)
  const mailFormat =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  let message =
    "Please add a correct email, password, or non-existing email!";
  const response = await fetch(`${url}/all`);
  const data = await response.json();
  console.log(data);
  let emailChecker = await data.findIndex((ele) => ele.email === email);
  //check email field

  if (email.match(mailFormat) && emailChecker == -1) {
    //check empty password field
    if (password.length === 0) {
      alert("Fill the password please!");
      return false;
    }
    //minimum password length validation
    else if (password.length < 8) {
      alert("Password length must be at least 7 characters");
      return false;
    }
    //maximum length of password validation
    else if (password.length >= 15) {
      alert("**Password length must not exceed 15 characters");
      return false;
    } else {
      alert("Password is Accepted");
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const raw = JSON.stringify({
        "first_name": first_name,
        "last_name": last_name,
        "email": email,
        "password": password,
      });
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      await fetch(`${url}/register`, requestOptions);
      window.location.href = "./login.html";
      message = "Please Click the Login Button";
    }
  }
  alert(message);
}
