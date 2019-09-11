const http = require('http');

const data = [{
    user: {
        username: 'rxJoe',
        login: 'rxbud',
        password: '123qwe',
        email: 'al@nail.mu',
    },
    profile: {
        about: 'this is about me',
        address: '20d south city, RU',
    }
}];

http
    .createServer((req, res) => {
        try {
            if (req.url === '/users') {
                res.writeHead(200, {
                    'Content-Type': 'text/json',
                    'Access-Control-Allow-Origin': '*',
                });
                res.end(`${JSON.stringify(data)}`);
            }
            if (/\/users\/remove\/[0-9]+/.test(req.url)) {
                res.writeHead(200, {
                    'Content-Type': 'text/json',
                    'Access-Control-Allow-Origin': '*',
                });
                res.end(`${JSON.stringify([])}`);
            }
        } catch (e) {
            console.log(e.message);
            res.end();
        }
    })
    .listen(8000, function(){
        console.log("server start at port 8000");
    });
