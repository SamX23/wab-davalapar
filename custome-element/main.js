import ImageFigure from './image-figure.js'

// Kalau tidak dicantumkan pada HTML, gunakan kode dibawah ini
const imageFigureElement = document.createElement("image-figure");

imageFigureElement.setAttribute("src", "https://i.imgur.com/iJq78XH.jpg");
imageFigureElement.setAttribute("alt", "Dicoding Logo");
imageFigureElement.setAttribute("caption", "Huruf g dalam logo Dicoding");

document.body.appendChild(imageFigureElement);