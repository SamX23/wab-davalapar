import "./article-list.js";
import articles from "./articles.js";

// Berfungsi sebagai container item
const articleListElement = document.createElement("article-list");
articleListElement.articles = articles;

document.body.appendChild(articleListElement);