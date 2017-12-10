const express = require('express')
const studentsRouter = express.Router()
const Students = require('../db/models').Students
const Campuses = require('../db/models').Campuses
module.exports = studentsRouter

//GET all students /api/students
studentsRouter.get('/', (req, res, next) => {
	Students.findAll({
		include: [{
			model: Campuses,
			as: 'Campus'
		}]
	})
	.then(students => {
		res.send(students)})
	.catch(next)
	})

	//GET one student /api/students/:studentid
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

//POST add one student /api/students
studentsRouter.post('/', (req, res, next) => {
	Students.findOrCreate({
		where: {
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			gpa: req.body.gpa,
		}
	})
	.spread((student, created) => {
		if (created) {
			return student.setCampus(parseInt(req.body.campusId, 10))
			.then(() => {
				return Students.findOne({
				where: {
					id: student.id
				},
				include: [{
					model: Campuses,
					as: 'Campus'
				}]
			})})
			.then(newStud => res.json(newStud))
		}
		else {res.json('Student already exists!')}
	})
	.catch(next)
})

//PUT edit one student /api/students/:studentid
studentsRouter.put('/:studentid', (req, res, next) => {
	Students.update(req.body, {
		where: {
			id: req.params.studentid
		},
		returning: true,
		plain: true
	})
	.spread((affected, updatedStudent) => {
		return updatedStudent.setCampus(parseInt(req.body.campusId, 10))
	.then(() => {
		return Students.findOne({
			where: {
				id: req.params.studentid
			},
			include: [{
				model: Campuses,
				as: 'Campus'
			}]
		})
	})
	.then(student => res.send(student))
	})
	.catch(next)
})

//DELETE one student /api/students/:studentid
studentsRouter.delete('/:studentid', (req, res, next) => {
	Students.findById(req.params.studentid)
	.then( student => {
		return student.destroy()
	})
	.then(() => res.sendStatus(204))
	.catch(next)
})
