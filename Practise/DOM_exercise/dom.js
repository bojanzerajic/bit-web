// var form = document.querySelector('form');

// function addElement(type, label, required) {
//     var input = document.createElement("input");
//     var labelEl = document.createElement("label");
//     var text = document.createTextNode(label);

//     input.setAttribute("type", type);
//     labelEl.appendChild(text);

//     if (required) {
//         input.setAttribute("required", "required");
//     }

//     form.appendChild(labelEl);
//     form.appendChild(input);

// }

// addElement("password", "Password");
// addElement("email", "Email", true);
// addElement("text", "Name");


// var secondList = function () {
//     var second = document.getElementById('secList').className = "secondUl";
// }
// secondList();

// var selectListItems = function () {
//     var listItems = document.getElementsByTagName('li');
//     for (var i = 0; i < listItems.length; i++) {
//         listItems[i].className = ".listItem";
//     }
// }
// selectListItems();

var images = ["img/Viki_1.jpg" , "img/Viki_2.jpg", "img/Viki_3.jpg"];

function addImages(filePath) {
    for (var i = 0; i < filePath.length; i++) {
        var mainDiv = document.querySelector("div");
        var image = document.createElement('img');
        image.setAttribute('src', filePath[i]);
        mainDiv.appendChild(image);
    }
    document.querySelector("div img").classList.add("active");
}
addImages(images);

function slideImg() {
    var active = document.querySelector(".active");
    active.classList.remove("active");
    if (active.nextElementSibling) {
        active.nextElementSibling.classList.add("active");
    } else {
        document.querySelector("div img").classList.add("active");
    }
}



setInterval(slideImg, 2000);
