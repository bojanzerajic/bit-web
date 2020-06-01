export const renderJoke = (data) => {
    let joke = document.querySelector('p');
    joke.innerHTML = '';
    joke.textContent = data.value;

}