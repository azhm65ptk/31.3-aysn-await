let favNum= 7;

let baseURL= "http://numbersapi.com";

//1

async function favnum(){
    let data= await $.getJSON(`${baseURL}/${favNum}?json`);
    console.log(data)
}
favnum()

//2

const favNumbers=[5,10,15];
async function favnumbers(){
    let response= await $.getJSON(`${baseURL}/${favNumbers}?json`);
    console.log(response)
}

favnumbers()

//3

async function part3(){
    let facts= await Promise.all(
        Array.from({length:4}, ()=> $.getJSON(`${baseURL}/${favNum}?json`))
    )

    facts.forEach(data => {
        $('body').append(`<p> ${data.text} </p>`);
    });
}

part3()