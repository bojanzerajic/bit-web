const createCharacterCard = (characterData) => {
    let singleCharacterDiv = document.createElement('div');
    singleCharacterDiv.appendChild(createImage(characterData));
    singleCharacterDiv.appendChild(createTitleContainer(characterData));
    singleCharacterDiv.className = 'singleCharacterDiv';

    createMainDiv(singleCharacterDiv);
}

const createMainDiv = (singleCharacterDiv) => {
    let mainDiv = document.querySelector('.container');
    mainDiv.appendChild(singleCharacterDiv);
}

const createImage = (characterData) => {
    let image = document.createElement('img');
    image.setAttribute('src', characterData.image);
    return image;
}

const createTitle = (characterData) => {
    let title = document.createElement('a');
    title.textContent = characterData.name;
    title.setAttribute('href', "characterInfo.html?id=" + characterData.id);
    return title;
}

const createLikeButton = () => {
    let likeButton = document.createElement('div');
    likeButton.innerHTML = '<button type="button" class="btn btn-outline-success likeButton"><i class="fa fa-thumbs-up"></i>Like</button>';
    return likeButton;
}

const createTitleContainer = (characterData) => {
    let titleDiv = document.createElement('div');
    titleDiv.className = 'titleDiv';
    titleDiv.appendChild(createTitle(characterData));
    titleDiv.appendChild(createLikeButton());
    return titleDiv;
}

export const renderCharacters = (response) => {
    response.results.forEach(result => {
        createCharacterCard(result);
    })
}