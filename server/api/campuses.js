const campusRouter = require('express').Router()
const Campuses = require('../db/models').Campuses
const Students = require('../db/models').Students
module.exports = campusRouter

//GET api/campuses gets all campuses
campusRouter.get('/', (req, res, next) => {
	Campuses.findAll()
	.then(campuses => res.send(campuses))
	.catch(next)
})

//GET /api/campuses/:campusid
//get one campus and
//find all students that have that campus ID
campusRouter.get('/:campusid', (req, res, next) => {
	let campusid = req.params.campusid;
	Promise.all([
		Campuses.findOne({
		where: {
			id: campusid
		}
		}),
		Students.findAll({
			where: {
				CampusId: campusid
			},
			include: [{
				model: Campuses,
				as: 'Campus'
			}]
		})
	])
	.then((results) => {
		res.send({
			campus: results[0],
			students: results[1]
		})
	})
	.catch(next)
	})

	//POST one new campus /api/campuses
campusRouter.post('/', (req, res, next) => {
	Campuses.findOrCreate({
		where: {
			name: req.body.name,
			imageURL: req.body.imageURL,
			description: req.body.description
		}
	})
	.spread((campus, created) => {
		if (created) res.json(campus);
		else res.json('This campus already exists!')
	})
	.catch(next)
})

//PUT edit one campus /api/campuses/:campusid
campusRouter.put('/:campusid', (req, res, next) => {
	Campuses.update(req.body, {
		where: {
			id: req.params.campusid
		},
		returning: true,
		plain: true
	})
	.spread((affected, updatedCampus) => {
		res.json(updatedCampus)
	})
	.catch(next)
})

//DELETE one campus /api/campuses/:campusid
campusRouter.delete('/:campusid', (req, res, next) => {
	Campuses.findById(req.params.campusid)
	.then(campus => {
		return campus.destroy()
	})
	.then(() => res.sendStatus(204))
	.catch(next)
})
