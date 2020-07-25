const Knex = require('knex');
const connectionConfig = require('../knexfile');
const { Model } = require('objection');

const knexConnection = Knex(connectionConfig);

Model.knex(knexConnection);

class Project extends Model {
	static get tableName() {
		return 'projects';
	}

	static get relationMappings() {
		return {
			users: {
				relation: Model.BelongsToOneRelation,
				modelClass: User,
				join: {
					from: 'projects.users_id',
					to: 'users.id'
				}
			}
		};
	}
}

class User extends Model {
	static get tableName() {
		return 'users';
	}

	static get relationMappings() {
		return {
			projects: {
				relation: Model.HasManyRelation,
				modelClass: Project,
				join: {
					from: 'users.id',
					to: 'projects.users_id'
				}
			}
		};
	}
}
module.exports = { Project, User };
