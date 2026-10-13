const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
  try{
    const html = fs.readFileSync('os.html','utf8');
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(html);
  }catch(e){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('<h1>Erreur: crée le fichier os.html</h1>');
  }
});
server.listen(3000,()=>console.log('APPLE-OS pret sur port 3000'));
