import Handlebars from 'handlebars/dist/handlebars.runtime'
import signInPage from './signIn.hbs'
import SignUpPage from './signIn.hbs'

Handlebars.registerPartial('signInPage', signInPage)


document.addEventListener('DOMContentLoaded', () => {



  const goToSignUpBtn = document.getElementById('create-account-btn')

  goToSignUpBtn.addEventListener('click', () => {
    document.body.innerHTML = SignUpPage()    
  })
  
})
