loginToken = process.env.logintoken
if (!loginToken) {
  throw new Error('logintoken environment variable missing')
}

loginUrl = 'http://192.168.1.1/login.cgi'

request = require('request').defaults({jar: true});

let login = callback => { request({
  method: 'POST',
  uri: loginUrl,
  headers: {
    'Referer': 'http://192.168.1.1/Main_Login.asp'
  },
  form: {
    login_authorization: loginToken
  }
}, (error, response, body) => {
  if (error) {
    console.log('error', error)
  } else if (response.headers['set-cookie']) {
    callback()
  } else {
    console.log('login probably failed')
    console.log(response.statusCode)
    console.log('response headers', response.headers)
  }
})}

module.exports = login
