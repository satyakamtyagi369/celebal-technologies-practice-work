//Imagine karo, aap pizza order karte hai.
//jab tak pizza ready nahi hota, aap wait karte ho.
//jab pizza ready ho jata hai, toh aap khaate ho.

// ab yeh sab hum handle karege, async/await se -- jo promises ko aur jyada clean aur readable banata hai.

function bananedopizza(){
    return new Promise((resolve,reject)=>{
        console.log("Pizza ban rah hai, pause for 3 seconds.");
        setTimeout(()=>{
            resolve("Pizza ready...");
        },3000);// 3 second baad pizza ready ho jayega.
    });
}
async function pizzaProcess() {
    console.log("Order diya..");
    //wait for pizza to get ready.
    const result= await bananedopizza();
    console.log(result);
    console.log("Pizza aagaya khaayege ab hum.");
}


pizzaProcess();
