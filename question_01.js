function db(arr,cb){
    let db = arr.map((num) => {
        return cb(num);
    });
    return db;
}

let arr = [2,3,4,5,6];
function cb(num){
    return num*2;
}
const db = db(arr,cb);
console.log(db);