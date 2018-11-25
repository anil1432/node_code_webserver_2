const express=require('express');
const hbs= require('hbs');
 var app= express();
 app.use(
     (req,res,next)=>{
    var user= req.user;
    res.render('maintanance.hbs',{ logged:user});
    
 app.get('/',(req,res)=>{
    res.render('home.hbs',{
        title:'Home page',
        copyRight:new Date().getFullYear(),
        message:'Welcome Page'
    });
 })
 

 })
 hbs.registerPartials(__dirname+'/partials');
 app.use(express.static(__dirname+'/public'));
 
 app.listen(5400,()=>{
     console.log('server about to run');
 });