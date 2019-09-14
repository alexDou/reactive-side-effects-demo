const http = require('http');

const data = [{
            user: {
            username: 'rxJoe',
            login: 'rxbud',
            password: '123qwe',
            email: 'al@nail.qq',
        },
        profile: {
            about: 'this is about me',
            address: '20d south city, Qzee',
        },
    },
    {
        user: {
            username: 'rxJane',
            login: 'rxwow',
            password: 'qawsed',
            email: 'rw@tail.bb',
        },
        profile: {
            about: 'Jane story',
            address: '40h north ave, Bwoo',
        },

    },
    {
        user: {
            username: 'rxJezy',
            login: 'rxzi',
            password: 'qwaszx',
            email: 'rz@bail.dd',
        },
        profile: {
            about: 'Jezzy` turns',
            address: '60h west city, Dgu',
        },

    }
];

let data_session;

http
    .createServer((req, res) => {
        try {
            if (req.url === '/users') {
                data_session = [...data];
                res.writeHead(200, {
                    'Content-Type': 'text/json',
                    'Access-Control-Allow-Origin': '*',
                });
                res.end(`${JSON.stringify(data)}`);
            } else if (/\/users\/remove\/[0-9]+/.test(req.url)) {
                const uidx = +req.url.replace(/^(.*)\//, '');
                data_session = data_session ? data_session.filter((u, idx) => idx !== uidx) : [...data];
                res.writeHead(200, {
                    'Content-Type': 'text/json',
                    'Access-Control-Allow-Origin': '*',
                });
                res.end(`${JSON.stringify(data_session)}`);
            } else {
                res.writeHead(501, {
                    'Access-Control-Allow-Origin': '*',
                });
                res.end();
            }
        } catch (e) {
            res.writeHead(400, {
                'Access-Control-Allow-Origin': '*',
            });
            res.end();
        }
    })
    .listen(8000, function(){
        console.log("server start at port 8000");
    });
