const http = require("node:http")

const server = http.createServer((request, response) => {
    const {method, url} = request

    if(method === "GET" && url === "/fundamentos"){
        response.setHeader('Content-type', "application/json")
        return response.end(JSON.stringify({mensagem: "Hello World, fundamentos node js aplicado"}))
    }

})

const port = 3030
const hostname = "localhost"

server.listen(port, hostname, () => {
    console.log(`Servidor inciado na url "http//${hostname}:${port}"`)
})
