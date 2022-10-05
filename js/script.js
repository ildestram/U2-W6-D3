// function showImage(fileName) {
//     let img = document.querySelector("#first");
//     img.setAttribute("src", fileName);
// }

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === "./js/first.jpeg") {
        myImage.setAttribute('src', "./js/locandina.jpeg");
    } else {
        myImage.setAttribute('src', "./js/first.jpeg");
    }
}