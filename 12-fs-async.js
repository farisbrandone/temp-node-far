const http=require('http');

const server=http.createServer((req,res)=>{
 //console.log(req)
 if (req.url==='/'){
     res.end('Here is our short history')
 }
 if (req.url==='/about'){
    res.end('Here is our short history')
}
res.end(`<h1>Oops!</h1>
<p>we can't seen to find the page you are looking for</p>
<a href="/">back home</a>`)
//res.write('welcome to our home page');
//res.end()
});
server.listen(5000)
