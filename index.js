const express = require("express")

const app = express()
app.use(express.json())

let Port = 5000

app.listen(Port, () => {
    console.log("backend eshitilmoqda...")
})


