
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
      user_name:user_name.value,
      email:email.value,
      password:password.value,
    })
  }).then(res => res.json())
  .then(data=>{
    console.log(data);
  })
  .catch(err=>{
    console.log(err);
  })
})