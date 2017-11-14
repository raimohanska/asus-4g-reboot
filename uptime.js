const login = require('./login')
const logout = require('./logout')

request = require('request').defaults({jar: true});

let uptime = () => { 
  request({
    uri: 'http://192.168.1.1/ajax_status.xml?hash=0.7616325189721338'
  }, (error, response, body) => {
    if (error) {
      console.log('error', error)
    } else {
      let uptime = body.substring(body.indexOf('uptimeStr'))
      uptime = uptime.substring(uptime.indexOf('(') + 1)
      let uptimeSecs = uptime.split(' ')[0]
      console.log(uptimeSecs)
    }
    logout()
  })
}

login(uptime)
