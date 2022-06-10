/*const http = require('http');
const port = 5040;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello, User!</h1> <h3> Welcome Home</h3>\n');
});

server.listen(port, () => {
  console.log(`Server is running on port number::${port}`);
});*/



let http = require('http');
let fs=require('fs');
let handleRequest = (request,response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('html code\ Hello World (2).html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            response.write('Not there');
        } else {
            response.write(data);
        }
        response.end();
    });
};

http.createServer (handleRequest).listen(3001);

