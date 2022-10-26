const url = 'http://localhost:3000/login'
const form = document.forms["create-todo-form"]

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const email = document.querySelector(`input [type="email"]`).value
    const password = document.querySelector(`input [type="password"]`).value
    

    console.log(email)
    console.log(password)
    const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const raw = JSON.stringify({
    password, email
  });
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch(url, requestOptions)
})