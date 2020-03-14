


const searchValue = document.querySelector('input').value;

let request = new XMLHttpRequest();
request.open("GET", "http://api.tvmaze.com/shows");
request.send();

request.onload = function () {
    let res = JSON.parse(request.responseText);
    console.log(res);
    
    for (let i = 0; i < 50; i++) {
        let image = document.createElement('img');
        image.setAttribute('src', res[i].image.medium);
        let link = document.createElement('a');
        link.setAttribute("href", 'movieInfo.html?id=' + res[i].id);
        link.textContent = res[i].name;
        let singleMovieDiv = document.createElement('div');
        singleMovieDiv.appendChild(image);
        singleMovieDiv.appendChild(link);
        singleMovieDiv.className = 'singleMovieDiv';
        let mainDiv = document.querySelector('#container');
        mainDiv.appendChild(singleMovieDiv);
        
    };
}


