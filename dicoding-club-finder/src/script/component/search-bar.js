class SearchBar extends HTMLElement {
    constructor() {
        super()
        this._shadowRoot = this.attachShadow({
            mode: 'open'
        })
    }

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

    get value() {
        return this._shadowRoot.querySelector("#searchElement").value;
    }

    render() {
        this._shadowRoot.innerHTML = `
        <style>
        .search-container {
            max-width: 800px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            padding: 16px;
            border-radius: 5px;
            display: flex;
            position: sticky;
            top: 10px;
            background-color: white;
        }
        
        .search-container > input {
            width: 75%;
            padding: 16px;
            border: 0;
            border-bottom: 1px solid cornflowerblue;
            font-weight: bold;
        }
        
        .search-container > input:focus {
            outline: 0;
            border-bottom: 2px solid cornflowerblue;
        }
        
        .search-container > input:focus::placeholder {
            font-weight: bold;
        }
        
        .search-container >  input::placeholder {
            color: cornflowerblue;
            font-weight: normal;
        }
        
        .search-container > button {
            width: 23%;
            cursor: pointer;
            margin-left: auto;
            padding: 16px;
            background-color: cornflowerblue;
            color: white;
            border: 0;
            text-transform: uppercase;
        }
        
        @media screen and (max-width: 550px){
            .search-container {
                flex-direction: column;
                position: static;
            }
        
            .search-container > input {
                width: 100%;
                margin-bottom: 12px;
            }
        
            .search-container > button {
                width: 100%;
            }
        }
        </style>

        <div id="search-container" class="search-container">
            <input placeholder="Search football club" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
        </div>
        `;

        this._shadowRoot.querySelector("#searchButtonElement")
            .addEventListener("click", this._clickEvent);
        // Hapus jika tidak ingin auto show
        this._shadowRoot.querySelector("#searchElement")
            .addEventListener("keyup", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);