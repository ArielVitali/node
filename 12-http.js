var http = require('http')

var server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Out story')
    }
    
    res.end(`
    <h1> Oops <h1>
    `)


})

server.listen(5000)