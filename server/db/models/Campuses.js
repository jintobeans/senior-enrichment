const db = require('../index');
const Sequelize = require('sequelize')

const Campuses = db.define('campuses', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	imageURL: {
		type: Sequelize.STRING,
		defaultValue: 'http://hyperphysics.phy-astr.gsu.edu/hbase/Solar/picsol/PIA00405.jpg'
	},
	description: Sequelize.TEXT
})

module.exports = Campuses;
