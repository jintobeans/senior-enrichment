const db = require('../index');
const Sequelize = require('sequelize')

/*
- Campuses
  * have profile info including:
    * name - not empty or null
    * imageUrl - default value
    * description - extremely large text
  * can have many students assigned (may have none)
*/


const Campuses = db.define('campuses', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	imageURL: {
		type: Sequelize.STRING,
		defaultValue: ''
	},
	description: {
		type: Sequelize.TEXT
	}
})

module.exports = Campuses;
