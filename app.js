const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer(function(_req, _res) {
    _res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('main.html', function(_error, _data) {
        if (error) {
            _res.writeHead(404)
            _res.write('file not found')
        } else {
            _res.write(_data)
        }
        _res.end()
    })
})

server.listen(port, function(_error) {
    if (error) {
        console.log('something went wrong', error)
    } else {
        console.log('server is listening on port ' + port)
    }
})