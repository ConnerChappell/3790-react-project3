const axios = require('axios')
// This is how the sportsDB docs said to use the key 🤷‍♂️
const apiKey = process.env.SPORTSDB_API_KEY

exports.handler = async function (event, context) {
    console.log(event)
    console.log(context)
    try {
        const { league } = event.queryStringParameters
        const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/${league}`)
        return {
            statusCode: 200,
            body: JSON.stringify(response.data)
        }
    } catch (err) {
        return {
            statusCode: 404,
            body: err.toString()
        }
    }
}