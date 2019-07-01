const express = require ("express");
const app = express();
const db = require("./models/index");
db.sequelize.sync();


const bodyParser = require('body-parser'); 

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use('/users', require('./routes/user'));
app.use('/orders', require('./routes/orders'));
app.use('/products', require('./routes/products'));



// //criando a rota principal da aplicação:
// // req recebe dados de uma requisição http
// app.get("/", function(req, res){
//     res.send("seja bem vindo ao meu app");
// });

// //criando outras rotas:
// app.get("/sobre", function(req, res){
//     res.send("pagina sobre");
// });

// app.get("/blog", function(req, res){
//     res.send("Bem vindo ao meu blog");
// });

// //siquelize é um orm - um sistema que abstrai toda a camada de banco

// // depois dos dois pontos são os paramentros que o req vai receber atraves da requisão
// // digigar o nome e url pra testar
// // quando o nome e cargo são digitados na url o req envia os dados para o servidor node
// // o res contém a resposta dos dados que foram enviados pela requisição.
// app.get("/ola/:cargo/:nome", function(req, res){
//     // res.send("Bem vindo ao meu blog");
//     res.send(req.params)
// });



// essa função listen tem sempre que ser a ultima, caso contrário o sistema não roda
app.listen(8081, function(){
    console.log("servidor rodando localhost:8081")
});