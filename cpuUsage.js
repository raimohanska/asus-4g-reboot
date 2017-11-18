const login = require('./login')
const logout = require('./logout')
var parser = require('xml2json')

request = require('request').defaults({jar: true});

let cpuMemory = () => { 
  request({
    uri: 'http://192.168.1.1/cpu_ram_status.xml',
    headers: {
      Referer: 'http://router.asus.com/device-map/router_status.asp'
    }
  }, (error, response, body) => {
    if (error) {
      console.log('error', error)
    } else {
      let parsed = JSON.parse(parser.toJson(body))
      let cpu = parsed.info.cpu_info.cpu
      let percentage = cpu.usage / cpu.total
      console.log(percentage)
    }
    logout()
  })
}

login(cpuMemory)

