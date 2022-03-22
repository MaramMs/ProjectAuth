
const user_name=document.querySelector('#user_name')
const email=document.querySelector('#email')
const password=document.querySelector('#password')
const signUp = document.querySelector("#signUp");

signUp.addEventListener("click",(e)=>{
  e.preventDefault()
  fetch('/api/v1/register',{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify({
      username:user_name.value,
      email:email.value,
      password:password.value,
    }),
  }).JSON()
})