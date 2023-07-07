const express = require("express")
const app = express()
const path = require("path")
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const PORT = 9000
let formidable = require("formidable")

app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, "./image.html"))
})

app.post('/', (req, res) => {
    const form = new formidable.IncomingForm()

    form.parse(req)
    form.on("fileBegin",(name,file)=>{
        file.filepath=__dirname+"/uploads/"+file.originalFilename
    })
    res.sendFile(__dirname+"/image.html")
});

app.listen(PORT, () => { console.log("Server running at Port ", PORT) })


