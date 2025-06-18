function orderpizza(){
    return new Promise(function(resolve,reject){
        console.log("Pizza ban rah hai..., wait for 3 seconds.");
        setTimeout(function(){
            const pizzaready = false;
            if(pizzaready){
                resolve("Pizza ready.");
            }
            else{
                reject("Pizza nahi bana.");
            }
        },3000);
    });
}


orderpizza().then(function(result){
    console.log(result);
    console.log("pizza khaa rah hu.");
}).catch(function(error){
    console.log(error);
})