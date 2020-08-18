// Alternative selain penggunaaan custom element langsung pada html > dengan DOM
// const imageFigureElement = document.createElement("image-figure");
// document.body.appendChild(imageFigureElement);

class ImageFigure extends HTMLElement {
    connectedCallback() {
        this.src = this.getAttribute('src') || null
        this.alt = this.getAttribute('alt') || null
        this.caption = this.getAttribute('caption') || null

        this.innerHTML = `
        <figure>
            <img src='${this.src}'
                 alt="${this.alt}">
            <figcaption>${this.caption}</figcaption>
        </figure>
        `
    }

    attributeChangeCallback(name, oldValue, newValue) {
        this[name] = newValue;
        this.render();
    }



    static get observedAttributes() {
        return ["caption", "src", "alt"];
    }

}

customElements.define("image-figure", ImageFigure);
export default ImageFigure