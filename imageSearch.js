let userSearch = document.getElementById("search");
let submitBtn = document.getElementById("submit");



submitBtn.addEventListener("click", () => {
    let userValue = userSearch.value;
    if (userValue.length == 0) {
        alert("PLEASE ENTER SOME VALUE IN THE SEARCH BAR!");
    } else {
        let testUrl = `https://api.unsplash.com/search/photos?page=1&query=${userValue}&client_id=yeD_wBaTcTYGDx1UNEvG5eGT6YNeaYLmPJOK1W2VeRQ`;
        opreterFetch(testUrl);
        userSearch.value = "";
    }
})

function opreterFetch(ulS) {
    fetch(ulS).then((response1) => {
        return response1.json();
    }).then((res) => {
        for (let i = 0; i < 10; i++) {
            let image = document.getElementById(`img${i}`);
            let fetchImg = res.results[i].urls.thumb;
            manipulateSrc(image, fetchImg)
        }
    }).catch((error) => {
        console.log(error);
        alert("PLEAR ENTER VALID IMAGES!")
    })
}



function manipulateSrc(oldImg, newImg) {
    oldImg.setAttribute("src", newImg);
}











