function orderpizza(callback){
    console.log("Pizza ban rah hai., wait for 3 seconds");
    setTimeout(function(){
        console.log("Pizza ready.");
        callback(); //yaha function callback ho rah hai.
    },3000);
}

function eatpizza(){
    console.log("Pizza khaa rah hu.");
}

orderpizza(eatpizza);