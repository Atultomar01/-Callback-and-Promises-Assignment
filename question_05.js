function greet(name){
    return new Promise((resolve)=>{
        const greeting = `hello ${name}`;
        resolve(greeting);
    })
};

let namee = "Atul";
greet(namee).then((message)=>
console.log(message));