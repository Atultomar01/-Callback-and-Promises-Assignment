const person = {
    fname : "Atul",
    Lname : "Tomar",
    age : 21
};

function ageInDay(person,logresult){
    const fullname = `${person.fname}${person.Lname}`;
    const age = person.age *365;
    logresult(fullname,age);
}
function logresult(fullname,age){
    console.log(`my full name is ${fullname} and my age is ${age}`);
}
ageInDay(person,logresult);