import Handlebars from 'handlebars/dist/handlebars.runtime'

Handlebars.registerHelper('helloHelper', (firstname) => {
  return `Hello, ${firstname}!`
})