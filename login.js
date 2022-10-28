const url = 'http://localhost:3000/login'
const form = document.forms["create-todo-form"]
const welcome= document.getElementById("welcome")
const register=document.getElementById("register")
const login = document.getElementById("load")
// Get the modal
const modal = document.getElementById('id01');
const span = document.getElementsByClassName("close")[0];
const btn = document.getElementById("btn")
const cancelbtn = document.getElementById("cancelbtn")

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

btn.onclick = function(event) {
  modal.style.display='block'
}

span.onclick = function() {
  modal.style.display = "none";
}

cancelbtn.onclick = function() {
  modal.style.display = "none";
}



login.addEventListener("click", () => {
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


// window.location.href = "./index.html"
const myHeaders2 = new Headers();
myHeaders2.append("Content-Type", "application/json");


const requestOptions2 = {
  method: 'GET',
  headers: myHeaders2,
  redirect: 'follow'
};

fetch("http://localhost:3000/login", requestOptions2)
  .then(response => response.json())
  .then(result => {
    if(result!==null || result.length>0){
      console.log(result)
    form.style.display="none"
    register.style.display="none"
  }else{
      form.style.display="none"
      register.style.display="none"}
    
    })
  
  .catch(error => console.log('error', error));

})
window.location.href = "./index.html"
})