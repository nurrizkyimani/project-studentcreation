const Knex = require('knex')
const connectionConfig = require('../knexfile')
const { Model } = require('objection')

const knexConnection = Knex(connectionConfig)

Model.knex(knexConnection)


class User extends Model {
    static get tableName() {
        return 'users'
    }

    static get relationMappings() {
        return {
            project: {
                relation: Model.BelongsToOneRelation,
                modelClass: Project,
                join: {
                    from: 
                    to: 'project.id'
                }
            }
        }
    }
}