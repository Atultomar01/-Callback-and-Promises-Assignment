async function fetch(){
    const FirstApi = await fetch ("https://jsonplaceholder.typeicode.com/todos/1");
    const SecondApi = await fetch ("https://jsonplaceholder.typeicode.com/posts/1");
    const firstData = await FirstApi.json();
    const SecondData = await SecondApi.json();

    const obj = {
        todo : firstData,
        post : SecondData
    }
    return obj;
}
fetch().then((data)=> console.log(data));