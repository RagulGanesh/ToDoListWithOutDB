const express=require('express')
const bodyParser=require('body-parser')
const app=express();
const date=require(__dirname+"/date.js")

// console.log(date.getDay())
var items=[]
var work_items=[]

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    // res.send("Server ready!!!")

    // var currentDay=today.getDay();
    // var day=""
     
    // if(currentDay===0){
    //     day="Sunday";
    // }
    // else if(currentDay===1){
    //     day="Monday";
    // }
    // else if(currentDay===2){
    //     day="Tuesday";
    // }
    // else if(currentDay==3){
    //     day="Wednesday";
    // }
    // else if(currentDay===4){
    //     day="Thursday";
    // }
    // else if(currentDay===5){
    //     day="Friday"
    // }
    // else{
    //     day="Saturday"
    // }
    // if(currentDay===6||currentDay===0){
    //     day="Weekend";
    //     // res.send("Yay!!! It's the weekend")
    //     // res.render('list',{kindOfday: day })
    // }else{
    //     day="Weekday"
    //     // res.render('list',{kindOfday: day })
    //     // res.send("It's a working day")
    //     // res.sendFile(__dirname+"/index.html")
    // }
    var day=date.getDate()
    res.render('list',{ listTitle: day, newItemHere : items })
});

app.post("/",(req,res)=>{
    // console.log(req.body)
    if(req.body.list==="Work"){
        var item=req.body.newItem
        work_items.push(item)
        res.redirect("/work")
    }
    else{
        var item=req.body.newItem
        items.push(item)
        res.redirect("/");
    }

    
})

app.get("/work",(req,res)=>{
    res.render('list',{ listTitle: "Work" , newItemHere :work_items })
})

app.get("/about",(req,res)=>{
    res.render("about")
})

// app.post("/work",(req,res)=>{

//     res.redirect("/work")
// })

app.listen(3000,()=>{
    console.log("Server Works")
})