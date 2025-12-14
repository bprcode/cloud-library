const http = require('http')

function noteTrouble(req, details) {
  if(!req || !(req instanceof http.IncomingMessage)) {
    throw new Error('Invalid request object for error logging')
  }

  if(!details) {
    throw new Error('Missing problem details')
  }

  if(!details.param) {
    throw new Error('Problem details must specify param')
  }

  if(!details.msg) {
    throw new Error('No message provided for problem details')
  }

  req.trouble ??= []
  req.trouble.push(details)
}

module.exports = {
  noteTrouble
}