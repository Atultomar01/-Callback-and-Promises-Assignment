async function fetch(){
    const respo = await fetch("https://jsonplaceholder.typeicode.com/todos/1");
    const data = await respo.json();
    // console.log(data);
    document.write(data);
}
fetch();