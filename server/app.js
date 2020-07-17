const express = require('express')
const cors = require('cors')
const parser = require('body-parser')


require('dotenv').config()

const app = express()

app.use(parser.urlencoded({extended: true}))
app.use(parser.json())

app.set('port', process.env.PORT || 3000)
app.set('view engine', 'hbs')

app.use(cors())

app.listen(app.get('port'), () => {
  console.log('Hello world!')
})



// require('dotenv').config()

// const pg = require('pg')
// pg.defaults.ssl = true

// module.exports = {
//     production: {
//         client: 'pg',
//         connection: process.env.DATABASE_URL,
//     },

//     development: {
//         client: 'pg',
//         connection: process.env.DATABASE_URL,
//     }
    
// }



// const { Model } = require('objection')

// class User extends Model {
//     static get tableName() {
//         return 'users'
//     }

//     static get idColumn() {
//         return 'id';
//     }

//     fullName() {
//         return this.firstName + ' ' + this.lastName;
//     }

//     static get jsonSchema() {
//         return {
//             type: 
//         }
//     }
// }