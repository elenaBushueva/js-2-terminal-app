const axios = require('axios');
const readlineSync = require('readline-sync');

const zip = readlineSync.question('May I have your zip? ');

axios({
    method: "GET",
    url: `https://api.zippopotam.us/us/${zip}`,
}).then(res => {
    console.log(`I know you live in ${res.data.country}, ${res.data.places[0].state} state, ${res.data.places[0]['place name']}`)
}).catch(error => console.log(error))

// HTTP protocol;
// Async requests;
// Promises (then, catch);
// Postman;
// Git, GitHub;