const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Box Model</title>
      <style>
              .container{
                   background-color: rgb(220 211 254);
                   border: 2px solid rgb(10, 2, 56);
                   /* we can set margin/padding for top , bottom, left, right like this 
                   padding-top: 37px;
                   padding-left:33px;
                   padding-bottom:33px;
                   padding-right: 33px; */
                   /* padding: 10px;
                   margin: 10px; */
                   /* padding/margin=top bottom right left */
                   /* padding= 23px 43px 53px 6px ; */
                      padding: 34px 19px;  /* padding=y(top/bottom) x(right/left) */
                      margin:  14px 19px;
                      border-radius: 23px;
                      width: 433px;
              }
      </style>
  </head>
  <body> 
  
      <div class="container">
          <h3>This is my heading</h3>
          <p id="first">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, at a ab, praesentium similique in voluptatum quae suscipit enim eaque exercitationem fugiat magni.</p>
      </div>
  
  
      <div class="container">
          <h3>This is my heading</h3>
          <p id="second">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, at a ab, praesentium similique in voluptatum quae suscipit enim eaque exercitationem fugiat magni.</p>
      </div>
  
  
      <div class="container">
          <h3>This is my heading</h3>
          <p id="third">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, at a ab, praesentium similique in voluptatum quae suscipit enim eaque exercitationem fugiat magni.</p>
      </div>
  
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});