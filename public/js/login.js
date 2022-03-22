
const login = document.querySelector('#login')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

login.addEventListener('click',(e)=>{
  e.preventDefault()
  fetch('/api/v1/login',{
  method:'POST',
  headers:{
    'Content-type':'application/json',
  },
  body:JSON.stringify({
    email:email.value,
    password:password.value
  }),
  
  })
});

