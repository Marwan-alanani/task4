titles = document.getElementsByTagName("h2")
const form = document.getElementById("form")
const username = document.getElementById("username")
const password = document.getElementById("password")
const show = document.getElementById("show")
const phone = document.getElementById("phone")
const dob = document.getElementById("dob")
const age = document.getElementById("age")
const email = document.getElementById("email")
const button = document.getElementById("button")
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function showError(i , p ){
  titles[i].classList.add("error")
  titles[i].innerText = p + " is required"
}
function removeError(i , p ){
  titles[i].classList.remove("error")
  titles[i].innerText = p
}

function change_type(e){
  e.preventDefault();
  if(password.type == "password"){
    password.type = "text"  
    show.innerText = "Hide password"
  }
  else if(password.type == "text"){
    password.type = "password"
    show.innerText = "Show password"
  }
}
var then = (e) => {
  // Username 0
  if(username.value.trim() == "" ){
    showError(0, "Username")
  }
  else if(username.value != ""){
    removeError(0 , "Username")
  }
    
// Password 1
if(password.value.trim() == ""){
  showError(1 , "Password")
 }
 else if(password.value != ""){
   removeError(1 , "Password")
 }
// Email 2
if(email.value.trim() == ""){
  showError(2 , "Email")
}
else if (email.value != ""){
  if (validateEmail(email.value) == false){
    titles[2].innerText = "Invalid email"
    titles[2].classList.add("error")
  }
    else{
      removeError(2,"Email")
    }
  }
// Phone 3
if(phone.value.trim() == ""){
  showError(3 , "Phone")
}
else if(phone.value != ""){
  if(phone.value.length < 8){
    titles[3].classList.add("error")
    titles[3].innerText = "Invalid phone number"
  }
  else{
    removeError(3 , "Phone")
  }
}
// Date of birth 4
if(dob.value.trim() == ""){
  showError(4 , "Date of birth")
}
else if (dob.value != ""){
  removeError(4 , "Date of birth")
  user_year = parseInt(dob.value)
  var today = new Date()
  age.value = today.getFullYear() - user_year   
}
// Age 5

if(age.value.trim() == ""){
  showError(5, "Age")
}
else if (age.value !=""){
  removeError(5 , "Age")
}

e.preventDefault();
}
button.addEventListener("click" , then)
show.addEventListener("click",change_type)
