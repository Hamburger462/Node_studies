const http = require("http");

const hardwareItems = [
    { id: 1, name: "Монитор", status: "work" },
    { id: 2, name: "Клавиатура", status: "work" },
    { id: 3, name: "Мышь", status: "broken" },
    { id: 4, name: "Системный блок", status: "work" },
];

const server = http.createServer((req, res) => {
    const { url, method } = req;

    const path = new URL(url, `http://${req.headers.host}`);

    if (method == "GET") {
        switch (path.pathname) {
            case "/devices":
                const status_query = path.searchParams.get("status");
                if (status_query) {
                    const search_devices = [];
                    for (const item of hardwareItems) {
                        if (item.status == status_query) {
                            search_devices.push(item);
                        }
                    }
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "application/json");
                    res.end(JSON.stringify(search_devices));
                    return;
                }
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify(hardwareItems));
                return;
                break;
        }
    }
    if (method == "POST") {
        switch (path.pathname) {
            case "/devices":
                let body = "";
                req.on("data", (chunk) => {
                    body += chunk.toString();
                });
                req.on("end", () => {
                    try {
                        const new_device = JSON.parse(body);
                        if (!new_device.name) {
                            throw new Error("Name is not filled in");
                        }
                        new_device.id = crypto.randomUUID();
                        res.statusCode = 201;
                        res.setHeader("Content-Type", "application/json");
                        res.end(JSON.stringify(new_device));
                    } catch (err) {
                        console.log("Error occured");
                        res.statusCode = 400;
                        res.end(JSON.stringify({ error: err.message }));
                    }
                    finally{
                        return;
                    }
                });
                break;
        }

        console.log(`[ADD]: Added device ${res.getHeader("user-agent")}`);
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server started on ${PORT} port`);
});
