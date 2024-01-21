const books = [
    { title : 'Python',
        author : 'Jai mohan',
        year : 1991
    },
    {
        title : "Javascript",
        author : 'Ram mishra',
        year : 2002
    },
    {
        title : "C++",
        author : "Peter chain",
        year : 1990
    }
];

function callback(titles){
    titles.sort();
    const seperater = titles.join(", ");
    console.log(seperater);
}

function mainFn(books,callback){
    const titles = books.map((book) => book.title);
    callback(titles);
}
mainFn(books,callback);