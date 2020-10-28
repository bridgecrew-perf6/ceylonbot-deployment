const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer(function(_req, _res) {
    _res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('')
    _res.end()
})

server.listen(port, function(_error) {
    if (error) {
        console.log('something went wrong', error)
    } else {
        console.log('server is listening on port ' + port)
    }
})