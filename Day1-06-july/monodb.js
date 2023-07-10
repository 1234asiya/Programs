const express = require("express")
const { MongoClient } = require('mongodb');
const app = express()
const PORT = 9000
const MONGO_URL="mongodb://localhost"
app.use(express.json())
app.get("/", (request, response) => {
   response.send("Hi using mongodb")
})
app.get("/getdata", (request, response) => {
    response.send("Hi using mongodb")
 })
app.post('/postdata', async(request, response) => {

    const result=await client.db("programdb").collection("programcol").insertOne({"Name":"Mounika","age":"20"})
    response.send(result)
    
    
});

async function createConnection(){
    const client=new MongoClient (MONGO_URL)
    await client.connect()
    return client
}
const client=await createConnection()
app.listen(PORT, () => { console.log("Server running at Port ", PORT) })


