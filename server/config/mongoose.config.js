const mongoose = require('mongoose')

const username = process.env.ATLAS_USERNAME;
const password = process.env.ATLAS_PASSWORD;
const database = process.env.ATLAS_DATABASE;

mongoose.connect(`mongodb+srv://${username}:${password}@my-first-db.uehwuuh.mongodb.net/studentsdb`)
    .then(() => console.log(`Established a Database Commlink Sync with: ${database}`))
    .catch(err => console.log('Something went wrong when connecting to the database.', err))