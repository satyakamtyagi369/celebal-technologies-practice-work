function firsttask(callback){
    setTimeout(() =>{
        console.log("First task completed.");
        callback();
    },700);
}
function secondtask(callback){
    setTimeout(() =>{
        console.log("Second task completed.");
        callback();
    },1500);
}
function thirdtask(){
    setTimeout(() =>{
        console.log("Third task completed.");
      //  callback();
    },500);
}
firsttask(function(){
    secondtask(function(){
        thirdtask();
    })
})