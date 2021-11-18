import Handlebars from 'handlebars/dist/handlebars.runtime'

Handlebars.registerHelper('currentChatInfo', (title, status) => {
  const chatInfo =  `<span class="chat-title">${title}</span> <span class="chat-status">${status}</span>`
  return new Handlebars.SafeString(chatInfo);
})