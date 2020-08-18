class SearchBar extends HTMLElement {
    connectedCallback() {
        this.id = this.getAttribute("id") || null;
        this.class = this.getAttribute("class") || null;
        this.render()
    }

    // atur setter click event
    set clickEvent(event) {
        this._clickEvent = event
        this.render()
    }

    // set enterEvent(event) {
    //     this._clickEvent = event
    //     this.render()
    // }

    get value() {
        return this.querySelector("#searchElement").value;
    }

    render() {
        this.innerHTML = `
        <div id="search-container" class="search-container">
            <input placeholder="Search football club" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
        </div>
        `;

        this.querySelector("#searchButtonElement")
            .addEventListener("click", this._clickEvent);

        // Hapus jika tidak ingin auto show
        this.querySelector("#searchElement")
            .addEventListener("keyup", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);