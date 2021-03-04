import axios from 'axios';

function getBlogs() {
    var data;
    data = axios.get("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40gopalvadith",{method: 'GET'})
    return data;
}

export default getBlogs;
