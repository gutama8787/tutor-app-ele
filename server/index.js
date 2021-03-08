const express = require('express');
const app = express();
const fs = require('fs')
const path = require('path');

// const mongoose = require('mongoose')
// const dbURI = 'mongodb+srv://gutama:RtEGNqv9O7TQxBun@cluster0.yela1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

// set port
const PORT = process.env.PORT || 8080to


app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.get('/', (req, res) => res.send("you are on the homepage"))
app.get('/hey', (req, res) => res.send('ho!'))


// regular expression
let exp = /^(\/subjects)\/([a-z]{1,10})\/week(\d{1,2})$/
app.get(exp, (req,res) => {
    console.log('here')
    let content = ''
    try {
        console.log('how about here')
        path = req.originalUrl.split('/')
        path = `./content/${path[2]}/${path[3]}.md`
        console.log(path)
        const data = fs.readFileSync(path,'utf8')
        res.send({data})

        
    } catch (err) {
        res.send(err)
    }
})

// expression for note path
let exp_notes = /^(\/subjects)\/([a-z]{1,10})\/week(\d{1,2})\/note$/
app.get(exp_notes, (req,res) => {
    console.log('here')
    let content = ''
    try {
        console.log('how about here')
        path = req.originalUrl.split('/')
        path = `./content/${path[2]}/${path[3]}_Note.md`
        console.log(path)
        const data = fs.readFileSync(path,'utf8')
        res.send({data})

        
    } catch (err) {
        res.send(err)
    }
})

//  mongoose.connect(dbURI, { useNewUrlParser: true } )

app.listen(PORT)

console.log(`server is running on ${PORT}`)