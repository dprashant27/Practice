var express=require("express");
const app=express();

app.get("/",(req,resp)=>{

    resp.send("<h1>hello my name is Prashant</h1>");
    resp.end();

});
app.listen(4000);
console.log("server is running at 4000");