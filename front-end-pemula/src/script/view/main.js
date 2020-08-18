import '../component/search-bar.js'
import '../component/club-list.js'
import DataSource from '../data/data-source.js'

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const clubListElement = document.querySelector("club-list");

    // Membuat button berjalan secara async
    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchClub(searchElement.value);
            renderResult(result);
        } catch (e) {
            fallbackResult(e);
        }
    };

    // const onSearchEnter = async () => {
    //     // Number 13 is the "Enter" key on the keyboard
    //     try {
    //         if (event.keyCode === 13) {
    //             event.preventDefault();
    //             alert('asd')
    //             searchElement.clickEvent = onButtonSearchClicked;
    //         };
    //     } catch (e) {
    //         fallbackResult(e);
    //     }
    // }

    const renderResult = results => clubListElement.clubs = results
    const fallbackResult = message => clubListElement.renderError(message)

    searchElement.clickEvent = onButtonSearchClicked;
    // searchElement.clickEvent = onSearchEnter;

};

export default main;