let express=require('express');
let fs=require('fs');
let path=require('path')
let app=express();
const port=process.env.PORT||2000;

app.use(express.static(path.join(__dirname,'../public')));
// app.use('/public',express.static('public'));
console.log(path.join(__dirname,'/public'));

app.set("views","../views");
app.set("view engine","hbs");

// console.log();
// console.log(path.join(__dirname,'/public'));


app.get("/",(req,res)=>{
    res.sendFile(path.join(path.join(__dirname,'../public/index.js')));
    // res.render('MagicNotes');
});

app.listen(port,()=>{
    console.log(`App is running on the port ${port}`);
});
