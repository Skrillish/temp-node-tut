// const server = http.createServer((req, res) => {
//     console.log(req)
//     res.write('Welcome to our home page.')
//     res.end()
// })

// server.listen(5000)
 


//       METHOD 1
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        return res.end('Welcome to our home page')
    }
    if (req.url === '/about') {
        return res.end('Here is our short history')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you're looking for</p>
        <a href="/">back home</a>
        `)
})

server.listen(5000)




//  METHOD 2

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//       res.end('Welcome to our home page');
//     }
//     else if (req.url === '/about') {
//       res.end('Here is our short history');
//     }
//        else {
//     res.end(`
//         <h1>Oops!</h1><p>We can't seem to find the page you're looking for</p>
//         <a href="/">back home</a>
//         `);
//        }
// })

