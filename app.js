var path = require('path')
var express = require('express')
const expressStatic = require("express-static");
var app = express()

app.use('/LMdashboard/image', [
    expressStatic(path.join(__dirname, '/image/'))
])

app.use('/LMdashboard/js', [
    expressStatic(path.join(__dirname, '/js/')),
    expressStatic(__dirname + '/node_modules/jquery/dist/',{etag: false})
])

app.use('/LMdashboard/css', [
    expressStatic(path.join(__dirname, '/css/'))
])

app.use('/LMdashboard/public', [
    expressStatic(path.join(__dirname, 'public')),
])

app.use('/LMdashboard', (req, res) => {
    res.sendFile('./index.html', { root: __dirname+'/public/', });
});

app.listen(3000)