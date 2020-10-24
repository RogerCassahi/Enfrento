const express = require('express')

const app = express();
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')
const path = require('path')


//Config
    //Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    //Conexão com o banco de dados MySql
   
    const sequelize = new Sequelize ('test','root', '1234',{
        host:'localhost',
        dialect: 'mysql'
    })

//Public
    app.use(express.static(path.join(__dirname,"public")))    
app.get("/" , function(req,res){
    res.sendFile(__dirname + "/login.html")
})

app.listen(8081, function(){
    console.log("Servidor Rodando!");
});