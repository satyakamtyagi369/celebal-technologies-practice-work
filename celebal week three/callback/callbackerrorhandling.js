function firsttask(callback){
    const randomNumber = Math.floor(Math.random() *10);
    if(randomNumber == 1){
        callback(new Error("Error in first task"));
    }
    else{
        setTimeout(() =>{
            console.log("first task completed.");
            callback();
        },700);
    }
}
function secondtask(callback){
    const randomNumber = Math.floor(Math.random() *10);
    if(randomNumber == 1){
        callback(new Error("Error in second task"));
    }
    else{
        setTimeout(() =>{
            console.log("second task completed.");
            callback();
        },1500);
    }
}
function thirdtask(){
    const randomNumber = Math.floor(Math.random() * 10);
    if(randomNumber == 1){
        console.log(new Error("Error in third task"));
    }
    else{
        setTimeout(() =>{
            console.log("Third task completed.");
        },500);
    }
}
firsttask(function(err){
    if(err){
        console.error("Error in first task:", err.message);
    }
    else{
        console.log("Task 1 completed successfully.");
    }
    secondtask(function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("Task 2 completed successfull.");
        }
        thirdtask();
    })
})