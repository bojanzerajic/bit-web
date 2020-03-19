let request = new XMLHttpRequest();
request.open("GET", " https://rickandmortyapi.com/api/character");
request.send();
request.onload = function () {
    let response = JSON.parse(request.responseText);
    console.log(response);
    for (let i = 0; i < 20; i++) {
        let list = document.createElement('ul');
        list.className = 'hidden';
        let status = document.createElement('li');
        status.textContent = 'status  ' + response.results[i].status;
        let species = document.createElement('li');
        species.textContent = 'species    ' + response.results[i].species;
        let type = document.createElement('li');
        type.textContent = 'type    ' + response.results[i].type;
        let gender = document.createElement('li');
        gender.textContent = 'gender    ' + response.results[i].gender;
        let location = document.createElement('li');
        location.textContent = 'location    ' + response.results[i].location.name;
        list.appendChild(status);
        list.appendChild(species);
        list.appendChild(type);
        list.appendChild(gender);
        list.appendChild(location);
        let title = document.createElement('h6');
        title.textContent = response.results[i].name;
        let image = document.createElement('img');
        image.setAttribute('src', response.results[i].image);
        let likeButton = document.createElement('div');
        likeButton.innerHTML = '<button type="button" class="btn btn-outline-success likeButton"><i class="fa fa-thumbs-up"></i>Like</button>';
        let titleDiv = document.createElement('div');
        titleDiv.className = 'titleDiv';
        titleDiv.appendChild(title);
        titleDiv.appendChild(likeButton);
        let singleCharacterDiv = document.createElement('div');
        singleCharacterDiv.appendChild(image);
        singleCharacterDiv.appendChild(list);
        singleCharacterDiv.appendChild(titleDiv);
        singleCharacterDiv.className = 'singleCharacterDiv';
        let mainDiv = document.querySelector('.container');
        mainDiv.appendChild(singleCharacterDiv);
    }
    
}

let getFullData = function () { 
    let fullInfo = document.querySelector("ul");
    fullInfo.removeClass = 'hidden';
    fullInfo.className = 'active';
}


let likeButton = document.querySelector('.likeButton');
likeButton.addEventListener('click', getFullData);