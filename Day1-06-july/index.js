const express = require("express")
const app = express()

const PORT = 9000
const db=require("./mongodb")

app.use(express.json())

app.get("/", (request, response) => {
   response.send("Hi using mongodb")
})
app.listen(PORT, () => { console.log("Server running at Port ", PORT) })

