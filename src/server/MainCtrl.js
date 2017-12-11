const { apiKey } = require('./../../tobeignored')
const { apiKey2 } = require('./../../tobeignored')
const { appId } = require('./../../tobeignored')
const axios = require('axios');



axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.common['X-AYLIEN-NewsAPI-Application-Key'] = `${apiKey}`;
axios.defaults.headers.common['X-AYLIEN-NewsAPI-Application-ID'] = `${appId}`;

let dailyNews = [];
let searchByWord = [];

const pullNews = (req, res) => {

    axios.get("https://api.newsapi.aylien.com/api/v1/stories").then(response => {
        dailyNews = response.data.stories;
        res.json(dailyNews);
    })
}

const searchByKeyword = (req, res, next) => {
    console.log(req.body.search)
    axios.get(`https://newsapi.org/v2/everything?q=${req.body.search}&apiKey=${apiKey2}`).then(response => {
        searchByWord = response.data
        res.json(searchByWord);
    }).catch(error => res.json(error.toString()))
}
               
    {/* https://newsapi.org/v2/top-headlines?sources=${req.body.search}&apiKey=${apiKey2} */}





module.exports = {
    pullNews,
    searchByKeyword
}

