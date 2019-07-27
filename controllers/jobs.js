var User = require('../models/user')

async function create(req, res) {
    await User.findById(req.body.user._id)
    .then(user => {
        user.jobs.push(req.body.job)
        user.save()
    })
}

async function index(req, res) {
    await User.findById(req.body.user._id)
    .then(user => {
        let jobs = user.jobs
        res.json(jobs)
    })
}

module.exports = {
    create,
    index
}