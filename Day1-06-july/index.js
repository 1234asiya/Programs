const express = require("express")
const app = express()
const path = require("path")
var bodyParser = require('body-parser');  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
const PORT = 9000

app.get("/post.html",(request,response)=>{
    response.sendFile(path.join(__dirname,"./post.html"))
})
app.post('/postpath', urlencodedParser, function (req, res) {    
    response = {  
        first_name:req.body.first_name,  
        last_name:req.body.last_name  
    };  
    console.log(response);  
    res.end(JSON.stringify(response));  
 })  
app.listen(PORT, () => { console.log("Server running at Port ", PORT) })


