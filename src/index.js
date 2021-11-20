import './components/modals/sidebarModal/sidebarModal'
import './components/modals/headerModal/headerModal'

import './hello/hello'
import './modules/Chat/header/header'
import './modules/Chat/footer/footer'
import './modules/Chat/sidebar/sidebar'

import './helpers'
import './helpers/error/'
import './helpers/chat/header/header'

import { toggleModal } from './lib/sidebar/modalUtils'

import SignInPage from './modules/SignIn/signIn.hbs'
import SignUpPage from './modules/SignUp/signUp.hbs'
import error from './modules/ErrorPages/error.hbs'
import chat from './modules/Chat/Chat.hbs'
import template from './index.hbs'

document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = template({firstname: 'Reviewer'})

  const goToLoginBtn = document.getElementById('login')
  const goToSignUpBtn = document.getElementById('create-btn')
  const goToError404 = document.getElementById('go-to-error404')
  const goToError5xx = document.getElementById('go-to-error5xx')
  const goToChat = document.getElementById('go-to-chat')

  const chatInfo = [
    {chatName: 'Yandex Practicum', userName: 'Аня Краева', userText: 'А почуму бы и нет'},
    {chatName: 'Инвестиции', userName: 'Набибулина', userText: 'Скупайте крипту'},
    {chatName: 'Кулинария', userName: 'Василий Емильянов', userText: 'Как приготовить дошик'}
  ]


  goToLoginBtn.addEventListener('click', () => {
    document.body.innerHTML = SignInPage()
  })

  goToSignUpBtn.addEventListener('click', () => {
    document.body.innerHTML = SignUpPage()    
  })

  goToError404.addEventListener('click', () => {
    document.body.innerHTML = error({code: '404'})    
  })

  goToError5xx.addEventListener('click', () => {
    document.body.innerHTML = error({code: '500'})    
  })

  goToChat.addEventListener('click', () => {
    document.body.innerHTML = chat({title: 'Yandex Practicum', status: 'online', chatInfo: chatInfo}) 
    const openModalBtn = document.querySelector('.profile-open')
    const modal = document.querySelector('.sidebar-modal-overlay')

    const headerSettingsBtn = document.querySelector('.chat-header__settings')
    const headermodal = document.querySelector('.header-modal-overlay')

    toggleModal(openModalBtn, modal, '.sidebar-modal') 
    toggleModal(headerSettingsBtn, headermodal, '.header-modal') 
  })

})
