const url = 'http://localhost:3000/register'
const form = document.forms["create-todo-form"]

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const email = document.querySelector(`input [type="email"]`).value
    const password = document.querySelector(`input [type="password"]`).value
    const firstName = document.querySelector(`input [type=firsttName"]`).value
    const lasttName = document.querySelector(`input [type=lastName"]`).value

    console.log(email)
    console.log(password)
    const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const raw = JSON.stringify({
firstName,lastName,password, email
  });
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch(url, requestOptions)
})