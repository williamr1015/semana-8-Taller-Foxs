import h from "hyperscript";
import { registerImage } from "./lazy";

const minimum = 1;
const maximum = 122;
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum

const createImageNode = () => {

    const container = document.createElement('div')
    container.className = "p-4"

    const imagen = document.createElement('img')
    imagen.className = "mx-auto";
    imagen.width = '320'
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`


    container.appendChild(imagen)
    return container;
};



const mountNode = document.getElementById("images")

const addButton = document.querySelector("#addButton")
const addImage = () => {
    const newImage = createImageNode();
    mountNode.append(newImage)
    registerImage(newImage);
}
addButton.addEventListener("click", addImage);

const cleanButton = document.querySelector("#cleanButton");

const cleanImages = () => {

    console.log(mountNode.childNodes);

    [...mountNode.childNodes].forEach(child => {
        child.remove();
    })
}

cleanButton.addEventListener("click", cleanImages)