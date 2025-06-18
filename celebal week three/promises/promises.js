let p = new Promise((resolve, reject)=>{
    let a=1+1;
    if(a==2){
        resolve("Success");
    }
    else{
        reject("Failed");
    }
})

p.then((message)=>{ // then call when promis is resolve.
    console.log("This is in the then block: " + message);
}).catch((message)=>{// catch call when promise is rejected.
    console.log("This is in the catch block: "+message);
})

//const userleft = false;
const userleft = true;
//const userwatchingcatvideo =false;
const userwatchingcatvideo=true;

const watchtutorialcallback = (callback,errorcallback)=>{
    if(userleft){
        errorcallback({
            name: "satyakam",
            message: ":("
        })
    }
    else if(userwatchingcatvideo){
        errorcallback({
            name:"satyakam",
            "message": "Satyakam is watching cat vidwo."
        })
    }
    else{
        callback("Thumbs up and Subscribe.");
    }
}
watchtutorialcallback((message)=>{
    console.log('Success: '+message)
},(error)=>{
    console.log(error.name+' '+error.message);
});


function watchtutorialpromise(){
    return new Promise((Resolve, Reject)=>{
        if(userleft){
        Reject({
            name: "satyakam",
            message: ":("
        })
    }
    else if(userwatchingcatvideo){
        Reject({
            name:"satyakam",
            "message": "Satyakam is watching cat vidwo."
        })
    }
    else{
        Resolve("Thumbs up and Subscribe.");
    }
    })
}
watchtutorialpromise().then((message)=>{
    console.log('Success;'+message)
}).catch((error)=>{
    console.log(error.name+' '+error.message);
});