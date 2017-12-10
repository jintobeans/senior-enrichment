const db = require('../index');
const Sequelize = require('sequelize')

const Students = db.define('students', {
	firstName: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	lastName: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		isUnique: true,
		validate: {
			isEmail: true,
			notEmpty: true
		}
	},
	gpa: {
		type: Sequelize.FLOAT(1, 1),
	}
}, {
	getterMethods: {
		fullName () {
			return this.firstName + ' ' + this.lastName;
		}
	}
})

module.exports = Students;
