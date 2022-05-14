const namef = document.querySelector('.name');
const lastname = document.querySelector('.lastname');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const confirmPassword = document.querySelector('.confirmpassword');
const form = document.querySelector('form')
const error = document.querySelector('.error')
const success = document.querySelector('.success')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
 let m=[]
  if(namef.value.length==0 ){
      m.push('Please enter first name')
  }
  if(namef.value.length==0 ){
    m.push('Please enter last name')
  }
  if(!email.value.includes('@') ){
    m.push('Please enter Valid Email')
  }
  if(password.length<8){
    m.push('Password must contains atleast 8 characters')
  }
  if(password.value!=confirmPassword.value){
    m.push('Password and confirm password should be same')
  }
  if(m.length!=0){
    error.innerHTML = m.join('. </br> ')
  }else{
      error.innerHTML = ''
      success.innerText = 'HURRAY FORM SUBMITTED' 
  }
})