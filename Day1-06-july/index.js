const express = require("express")
const app = express()
const path = require("path")
const PORT = 9003
app.set("view engine","ejs")
app.get("/:route", (request, response) => {
    const param1=request.params["route"]
    response.render(`${param1}`)
})
app.listen(PORT, () => { console.log("Server running at Port ", PORT) })


