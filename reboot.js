const login = require('./login')

request = require('request').defaults({jar: true});

let reboot = () => { 
  request({
    method: 'POST',
    uri: 'http://192.168.1.1/apply.cgi',
    headers: {
      'Referer': 'http://192.168.1.1/index.asp'
    },
    form: {
      action_mode: 'reboot',
      action_script: '',
      action_wait: '80'
    }
  }, (error, response, body) => {
    if (error) {
      console.log('error', error)
    } else {
      console.log('reboot response code', response.statusCode)
    }
  })
}

login(reboot)
