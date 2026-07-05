// greeting.js
import catImage from "./crying_cat.jpg"


const image = document.createElement("img");
image.src = catImage;
document.body.appendChild(image);

export const greeting = "Hello, Odinite!";