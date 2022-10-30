const url = "http://localhost:3000/login";
const form = document.forms["create-todo-form"];
const welcome = document.getElementById("welcome");
const register = document.getElementById("register");
const login = document.getElementById("load");
// Get the modal
const modal = document.getElementById("id01");
const span = document.getElementsByClassName("close")[0];
const btn = document.getElementById("btn");
const cancelbtn = document.getElementById("cancelbtn");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

btn.onclick = function (event) {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

cancelbtn.onclick = function () {
  modal.style.display = "none";
};


let submit = login.addEventListener("click", () => {
  console.log(submit)
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
      email,
      password,
    });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(url, requestOptions);
    const myHeaders3 = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw3 = JSON.stringify({
      email,
      password,
    });
    const requestOptions3 = {
      method: "GET",
      myHeaders3: {
        Authorization: `Bearer ${a}`,
      },
      redirect: "follow",
    };
    fetch("http://localhost:3000/authenticate", requestOptions3);
    // window.location.href = "./index.html"
    const myHeaders2 = new Headers();
    myHeaders2.append("Content-Type", "application/json");
    const requestOptions2 = {
      method: "GET",
      myHeaders2: {
        Authorization: `Bearer ${a}`,
      },
      redirect: "follow",
    };
    fetch("http://localhost:3000/login", requestOptions2)
      .then((response) => response.json())
      .then((result) => {
        if (result !== null || result.length > 0) {
          console.log(result);
          form.style.display = "none";
          register.style.display = "none";
        } else {
          form.style.display = "none";
          register.style.display = "none";
        }
      })
      .catch((error) => console.log("error", error));
  });
  verifyPassword();
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
    window.location.href = "./index.html";
    message = "Welcome to Marcy Chat"
  }
}
alert(message);
}

  
