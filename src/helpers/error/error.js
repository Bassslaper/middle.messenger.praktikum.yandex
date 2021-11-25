import Handlebars from 'handlebars/dist/handlebars.runtime'

Handlebars.registerHelper('errorCode', (code) => {
  return `${code}`
})