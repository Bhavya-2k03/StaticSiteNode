const http=require('http');
const fs=require('fs');

const server=http.createServer((req, res)=>{
    if(req.url==='/')
    {
        fs.readFile('index.html',(err,data)=>{
        if(err) 
        {
            res.writeHead(500,{'Content-Type':'text/plain'});
            res.end('Internal Server Error')
            return;
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
        })
    }    
    else if(req.url==='/styles.css')
    {
        fs.readFile('styles.css',(err,data)=>{
            if(err)
            {   
                res.writeHead(500,{'Content-Type':'text/plain'});             
                res.end('Internal server error');
                return;
            }
            res.writeHead(200,{'Content-Type' : 'text/css'});
            res.write(data);
            res.end();    
        })   
    }
    else
    {
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.write('Page not found');
        res.end();
    }

})
 
server.on('connection',()=>{
    console.log("New connection")
})


server.listen(3000,()=>{
    console.log("Listning on port 3000");
})