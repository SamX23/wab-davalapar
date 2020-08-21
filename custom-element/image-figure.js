// Alternative selain penggunaan custom element langsung pada html > dengan DOM
// const imageFigureElement = document.createElement("image-figure");
// document.body.appendChild(imageFigureElement);

class ImageFigure extends HTMLElement {
    // Penambahan shadow DOM
    constructor() {
        super()
        this._shadowRoot = this.attachShadow({
            mode: 'open'
        })
    }

    connectedCallback() {
        this.src = this.getAttribute('src') || null
        this.alt = this.getAttribute('alt') || null
        this.caption = this.getAttribute('caption') || null
        this.render()
    }

    render() {
        this._shadowRoot.innerHTML = `
        <style>
        figure {
          border: thin #c0c0c0 solid;
          display: flex;
          flex-flow: column;
          padding: 5px;
          max-width: 220px;
          margin: auto;
        }
  
        figure > img {
          max-width: 220px;
        }
  
        figure > figcaption {
          background-color: #222;
          color: #fff;
          font: italic smaller sans-serif;
          padding: 3px;
          text-align: center;
        }
        </style>

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