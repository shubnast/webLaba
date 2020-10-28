
const http = require('http');

const html = `
<!DOCTYPE html>
<html>
    <head>
   <title>Shubina Anastasia</title>     <!-- название вкладки-->
        <meta charset="utf-8">      <!--кодировка-->
        <meta name="description" lang="ru" content="Описание веб страницы">
        <meta name="author" content="Анастасия"><!-- контент отвечает за содержимое-->  
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    </head>
   
    <body>
    
      <div class="container">
        <h1> Страничка пренадлежит Шубиной Анастасии Борисовне ♥</h1>
        
        
      <h3>Расскажу немного о себе :</h3>   
        <ul type="square">   <!-- Маркированный список-->
            <li>Катаюсь на роликах</li>             
            <li class="test">Плохо пою</li>
            <li>Люблю рисовать иллюстрации, дизайнить логотипы и одностраничники</li>
        </ul>
            
       <p>
        <button class="btn btn-dark" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          Узнать где я учусь
        </button>
      </p>
      <div class="collapse" id="collapseExample">
        <div class="card card-body">
          Я учусь в МГТУ Станкин на 3 курсе
        </div>
      </div>
       <div id="rez"></div>
      </div>
       <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    </body>
    
</html>
`;


const server = http.createServer((req, res) => {
    console.log(req.url);
    switch(req.url){
        case '/':
            res.writeHead(200, {'Content-Type':'text/html'})
            res.end(html); 
        default:
            res.writeHead(404, {'Content-Type':'text/plain'})
            res.end('404 not found'); 
    }
    
}).listen(3000, () => console.log("server started"));