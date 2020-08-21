class AppBar extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({
            mode: 'open'
        });
    }

    connectedCallback() {
        this.id = this.getAttribute("id") || null;
        this.class = this.getAttribute("class") || null;
        this.render();
    }

    render() {
        this._shadowRoot.innerHTML = `
        <style>
        *{
            margin:0;
            padding:0;
            box-sizing:border-box;
        }

        :host {
                display: block;
                width: 100%;
                background-color: cornflowerblue;
                color: white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }
        h2{
            padding: 16px;
        }
        </style>
        <h2>Club Finder</h2>`
    }
}


customElements.define("app-bar", AppBar);