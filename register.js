const url = "http://localhost:3000/users";
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
  const raw = JSON.stringify({
    first_name,
    last_name,
    password,
    email,
  });
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(url, requestOptions);
  window.location.href = "./login.html";
});


