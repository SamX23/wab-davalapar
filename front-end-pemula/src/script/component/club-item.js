class ClubItem extends HTMLElement {
    set club(club) {
        this._club = club
        this.render()
    }

    render() {
        this.innerHTML = `
        <img class="fan-art-club" src="${this._club.fanArt}" alt="Fan Art">\n
                <div class="club-info">\n
                    <h2>${this._club.name}</h2>\n
                    <p>${this._club.description}</p>
                </div>
        `;
    }
}

customElements.define('club-item', ClubItem)