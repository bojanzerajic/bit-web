// var clickInput = function () {
//     var ipAddress = document.querySelector('input').value;
//     var xmlhttp = new XMLHttpRequest();
//     xmlhttp.open('GET', 'http://www.geoplugin.net/xml.gp?ip=' + ipAddress);
//     xmlhttp.send();
//     console.log(xmlhttp);
// }
// var button = document.querySelector('button');
// button.addEventListener("click", clickInput);
var image = document.createElement('img');


var dogInThaHouse = function () {
    var dogRequest = new XMLHttpRequest();
    var optionBreed = document.querySelector('select');
    dogRequest.open("GET", "https://dog.ceo/api/breed/" + optionBreed.value + "/images/random");
    dogRequest.send();

    dogRequest.onload = function () {
        var dogResponse = JSON.parse(dogRequest.responseText);
        var imgUrl = dogResponse.message;
        image.setAttribute("src", imgUrl);
        var body = document.querySelector('body');
        body.appendChild(image);
    }
}

// var option = document.querySelector('select');
setInterval(dogInThaHouse, 5000)







































