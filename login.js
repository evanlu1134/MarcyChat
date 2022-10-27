const url = 'http://localhost:3000/login'
const form = document.forms["create-todo-form"]
const welcome= document.getElementById("welcome")
const register=document.getElementById("register")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    

    console.log(email)
    console.log(password)
    const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const raw = JSON.stringify({
  email,password
  });
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch(url, requestOptions)
})


form.addEventListener("submit", () => {



  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");


var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://localhost:3000/login", requestOptions)
  .then(response => response.text())
  .then(result => {
    if(result!==null || result.length>0){
    form.style.display="none"
    register.style.display="none"
    welcome.innerText=  `Welcome to Marcy Chat ${result}`}
    else{
      form.style.display="none"
      register.style.display="none"
      welcome.innerText=  `User not found`}
    })

  .catch(error => console.log('error', error));

})