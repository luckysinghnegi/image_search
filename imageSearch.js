// let userchoice = prompt("enter image searchn!");

// let testUrl = `https://api.unsplash.com/search/photos?page=1&query=${userchoice}&client_id=yeD_wBaTcTYGDx1UNEvG5eGT6YNeaYLmPJOK1W2VeRQ`;
let arr;

fetch(testUrl).then((response1) => {
    return response1.json();
}).then((res) => {
    let arrLength = res.results.length;
    console.log(arrLength);
    for (let i = 0; i < arrLength; i++) {
        console.log(res.results[i].urls.full);
    }
}).catch((error) => {
    console.log(error);
})


