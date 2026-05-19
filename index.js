const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url == "/admin"){
        res.statusCode = 403;
        res.setHeader("Content-Type", 'text/plain; charset=utf-8');
        res.end("Доступ ограничен");
    }

    if(req.url == "/html"){
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.end("<h1>Инфо панель</h1>")
    }
    console.log(req.method);
    console.log(res.getHeader("User-Agent"));
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server started on ${PORT} port`);
})