const url = "http://localhost:3000/users";
const form = document.forms["create-todo-form"];

//Modal
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];


const email = document.querySelector("#email").value;
const password = document.querySelector("#password").value;
const first_name = document.querySelector("#firstName").value;
const last_name = document.querySelector("#lastName").value;

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


form.addEventListener("submit", async (event) => {
  event.preventDefault();
  verifyPassword()
});

async function verifyPassword() {
  const mailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  let message = "Please add the correct email, password, or a non-existing email!";
  const response = await fetch(`${url}/all`)
  const data = await response.json()
  console.log(data)
  let emailChecker = data.findIndex(ele => ele.email == email)
  //check email field
  if(email.match(mailFormat) && !emailChecker) {
  let submit = true
  //check empty password field
  if (password === "" && submit) {
    alert("Fill the password please!");
    return false;
  }
  //minimum password length validation
  else if (password.length < 8 && submit) {
    alert("Password length must be at least 7 characters")
    return false;
  }
  //maximum length of password validation
  else if (password.length >= 15 && submit) {
    alert("**Password length must not exceed 15 characters")
    return false;
  } else {
    alert("Password is Accepted");
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
      "first_name": first_name,
      "last_name": last_name,
      "email": email,
      "password": password
    });
    const requestOptions = {
      method: "POST",
      headers:  myHeaders,
      body: raw,
      redirect: "follow",
    };
    await fetch(`${url}/register`, requestOptions);
    window.location.href = "./login.html";
    message = "Please Login Now"
  }
}
alert(message);
}