import { renderJoke } from "./ui.js"
import { fetchJoke } from "./main.js"

const button = document.querySelector('button');
button.addEventListener('click', () => {
    fetchJoke()
});