import clubs from './clubs.js';
class DataSource {
    static searchClub(keyword) {
        // Penggunaan Promise
        // return new Promise((resolve, reject) => {
        //     const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));
        //     if (filteredClubs.length) {
        //         resolve(filteredClubs);
        //     } else {
        //         reject(`${keyword} is not found`);
        //     }
        // })

        // Penggunaan fetch
        const baseUrl = "https://www.thesportsdb.com/api/v1/json/1/searchteams.php"
        return fetch(`${baseUrl}?t=${keyword}`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if (responseJson.teams) {
                    return Promise.resolve(responseJson.teams);
                } else {
                    return Promise.reject(`${keyword} is not found`);
                }
            })
    }

};

export default DataSource;