class AppBar extends HTMLElement {
    connectedCallback() {
        this.id = this.getAttribute("id") || null;
        this.class = this.getAttribute("class") || null;
        this.render();
    }

    render() {
        this.innerHTML = `<h2>Club Finder</h2>`
    }
}


customElements.define("app-bar", AppBar);