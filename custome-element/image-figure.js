// class ImageFigure extends HTMLElement { }
// customElements.define('image-figure', ImageFigure)

// Alternative selain penggunaaan custom element langsung pada html > dengan DOM
// const imageFigureElement = document.createElement("image-figure");
// document.body.appendChild(imageFigureElement);

class ImageFigure extends HTMLElement {
    constructor() {
        super();
        console.log("constructed!")
    }


    connectedCallback() {
        console.log("connected!");
    }


    disconnectedCallback() {
        console.log("disconnected!");
    }


    adoptedCallback() {
        console.log("adopted!");
    }


    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute: ${name} changed!`);
    }


    // digunakan untuk mengamati perubahan nilai attribute caption
    /* kita bisa menetapkan lebih dari satu atribut yang diamati.
       dengan memisahkan nama atribut menggunakan koma. Contoh: */
    // return ["caption", "title", "src", ...]
    static get observedAttributes() {
        return ["caption"];
    }
}


customElements.define("image-figure", ImageFigure);

export default ImageFigure