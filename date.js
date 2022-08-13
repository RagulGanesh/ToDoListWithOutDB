function getDate(){
    var date=new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        
    };
    var day=date.toLocaleString("en-US",options)

    return day;
}

function getDay(){
    var date=new Date();
    var options = {
        weekday: "long",
        
    };
    var day=date.toLocaleString("en-US",options)

    return day;
}

module.exports={getDate,getDay};

// or module.exports.getDay=getDay;
// module.exports.getDate=getDate;