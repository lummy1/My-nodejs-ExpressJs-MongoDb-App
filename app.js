const express= require('express');
const app= express();


app.listen(3000);
let folder='./views'
app.get('/', (req,res)=>{

    console.log(req.url);
    res.sendFile(folder+'/index.html', {root:__dirname});

})

app.get("/add-item", (req,res)=>{

   res.sendFile(folder+'/add-item.html', {root:__dirname});

})

app.use((req,res)=>{
    res.sendFile(folder+'/error.html', {root:__dirname});
})