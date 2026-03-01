const http=require("http");
const fs
const user={
    name:'Kamakshha Gupta',
    age:'20'
};
const server=http.createServer((req,res)=>{
    const method=req.method;
    const url= new URL(req.url,`http://${req.headers.host}`);
    console.log(method,url);

    if(method=="GET" && url.pathname=="/"){
        res.writeHead(200,{"content-Type":"application.JSON"});
        res.end(JSON.stringify(user));
    }
    if(method=="POST" && url.pathname=="/"){
        const body= "";
        req.on("data",(chunk)=>{
            body += chunk;
        })
        req.on("end",()=>{
            fs.writeFile("./file.txt",body,()=>{
                res.writeHead(201,"data written")
            })
        })
    }
});
server.listen(3000,()=>{
    console.log("server is running on http://localhost:3000");
});

