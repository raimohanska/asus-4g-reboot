request = require('request').defaults({jar: true});

let logout = () => { 
  request({
    uri: 'http://192.168.1.1/Logout.asp',
    headers: {
      'Referer': 'http://192.168.1.1/index.asp'
    }
  }, (error, response, body) => {
    if (error) {
      console.log('error', error)
    } else {
      //console.log(body)
      //console.log(response.headers)
    }
  })
}

module.exports = logout
