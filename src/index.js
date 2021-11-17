import './hello'
import './helpers'
import SigneInPage from './modules/SignIn/signIn.hbs'
import template from './index.hbs'

document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = template({firstname: 'Alex', lastname: 'Gudini'})

  const btn = document.getElementById('login')

  btn.addEventListener('click', () => {
    document.body.innerHTML = SigneInPage()    
  })
  
})
