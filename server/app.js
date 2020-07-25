const express = require('express')
const cors = require('cors')
const parser = require('body-parser')
const morgan = require('morgan')
require('dotenv').config()

const app = express()

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(parser.urlencoded({extended: true}))
app.use(parser.json())

const { json } = require('body-parser')

const router = express.Router()

app.use(cors())

app.use('/user', require('./routes/Users'))
app.use('/project', require('./routes/Projects'))

app.get('/', (req, res) => {
  res.send({
    success: true, 
    info: 'this is main route'
  })
})

const PORT =  process.env.PORT || 7000

app.listen(PORT , () => {
   console.log(`PORT LISTEN TO ${process.env.NODE_ENV} mode on port ${PORT}`)
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