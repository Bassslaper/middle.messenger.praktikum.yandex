import Handlebars from 'handlebars/dist/handlebars.runtime'

Handlebars.registerHelper('helloHelper', (firstname, lastname) => {
  return `Hello, ${firstname} ${lastname}`
})