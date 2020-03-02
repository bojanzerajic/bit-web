var imagesFirst = ['img/delije.jpg', 'img/delije1.jpg', 'img/delije3.jpg'];
var imagesSecond = ['img/Viki_1.jpg', 'img/Viki_2.jpg', 'img/Viki_3.jpg'];

function addImages(array, id) {
    var mainDiv = document.getElementById('id');
    var image = document.createElement('img');
    for (var i = 0; i < array.length; i++) {
        image.setAttribute('src', array[i]);
    }
    mainDiv.appendChild(image);
}
addImages(imagesFirst, 'first');
addImages(imagesSecond, 'second');