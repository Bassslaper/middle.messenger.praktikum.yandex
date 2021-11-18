import './hello'
import './helpers'
import SignInPage from './modules/SignIn/signIn.hbs'
import SignUpPage from './modules/SignUp/signUp.hbs'
import template from './index.hbs'

document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = template({firstname: 'Alex', lastname: 'Gudini'})

  const goToLoginBtn = document.getElementById('login')
  // const goToSignUpBtn = document.getElementById('create-account-btn')

  goToLoginBtn.addEventListener('click', () => {
    document.body.innerHTML = SignInPage()    
  })

  // goToSignUpBtn.addEventListener('click', () => {
  //   document.body.innerHTML = SignUpPage()    
  // })
  
})
