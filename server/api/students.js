const express = require('express')
const studentsRouter = express.Router()
const Students = require('../db/models').Students
module.exports = studentsRouter

//GET /api/students
studentsRouter.get('/', (req, res, next) => {
	Students.findAll()
	.then(students => res.send(students))
	.catch(next)
	})

	//GET /api/students/:studentid
studentsRouter.get('/:studentid', (req, res, next) => {
	let studentid = req.params.studentid;
	Students.findOne({
		where: {
			id: studentid
		}
	})
	.then(student => res.send(student))
	.catch(next)
		})

//POST /api/students
studentsRouter.post('/', (req, res, next) => {
	Students.findOrCreate({
		where: {
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			gpa: req.body.gpa
		}
	})
	.spread((student, created) => {
		if (created) {
			return student.setCampus(parseInt(req.body.campusId, 10))
			.then(() =>
			res.json(student))
		}
		else {res.json('Student already exists!')}
	})
	.catch(next)
})

//PUT /api/students/:studentid
studentsRouter.put('/:studentid', (req, res, next) => {
	Students.findById(req.params.studentid)
	.then( student => {
		res.redirect(`/${student.id}`)
		return student.update(req.body)
	})
	.catch(next)
})

//DELETE /api/students/:studentid
studentsRouter.delete('/:studentid', (req, res, next) => {
	Students.findById(req.params.studentid)
	.then( student => {
		return student.destroy()
	})
	.then(() => res.sendStatus(204))
	.catch(next)
})
