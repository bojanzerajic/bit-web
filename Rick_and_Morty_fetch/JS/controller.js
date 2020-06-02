import { getCharacters } from "./data.js";
import { renderCharacters } from "./ui.js";

getCharacters().then(data => {
    renderCharacters(data)
})





