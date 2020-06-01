
const getData = new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open("GET", "https://api.chucknorris.io/");
    req.onload = () => {
        if (req.status === 200) {
            resolve(JSON.parse(req.responseText))
        } else {
            reject(JSON.parse(req.responseText).message)
        }


    }
    req.send();
});

getData.then((data) => {
    console.log(data)

}).catch((error) => {
    console.log(error);


})


