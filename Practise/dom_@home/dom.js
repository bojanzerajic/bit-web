var imagesFirst = ['img/delije.jpg', 'img/delije1.jpg', 'img/delije3.jpg'];
var imagesSecond = ['img/Viki_1.jpg', 'img/Viki_2.jpg', 'img/Viki_3.jpg'];

function addImages(array, id) {
    var mainDiv = document.getElementById('id');
    
    for (var i = 0; i < array.length; i++) {
        var image = document.createElement('img');
        image.setAttribute('src', array[i]);
        mainDiv.appendChild(image);
    }
   
}
addImages(imagesFirst, 'first');
addImages(imagesSecond, 'second');