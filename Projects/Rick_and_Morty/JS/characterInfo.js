
let a = window.location.search;

let urlId = (function index() {
    for (let i = 0; i < a.length; i++) {
        return a.slice(4);

    }
})();
console.log(urlId);

let request = new XMLHttpRequest();
request.open("GET", "https://rickandmortyapi.com/api/character/"+ urlId);
request.send();

request.onload = function() {
    let response = JSON.parse(request.responseText);
    console.log(response);
    let image = document.querySelector('#image');
    image.setAttribute('src', response.image);
    let name = document.querySelector('#name');
    name.textContent = response.name;
    let status = document.querySelector('#status');
    status.textContent = response.status;
    let species = document.querySelector('#species');
    species.textContent = response.species;
    let type = document.querySelector('#type');
    type.textContent = response.type;
    let gender = document.querySelector('#gender');
    gender.textContent = response.gender;
    let location = document.querySelector('#location');
    location.textContent = response.location.name;

    
    
}