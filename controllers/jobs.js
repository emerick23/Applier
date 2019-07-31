var User = require('../models/user')

async function create(req, res) {
    const user = await User.findById(req.body.user._id)
    user.jobs.push(req.body.job)
    user.save()
    index(req, res)
}

async function index(req, res) {
    const user = await User.findById(req.body.user._id)
    res.json(user.jobs)
}

async function detail(req, res) {
    await User.findById(req.body.user._id)
    .then(user => {
        let job = user.jobs[req.body.job]
        res.json(job)
    })
}

async function deleteJob(req, res) {
    await User.findById(req.body.user._id)
    .then(user => {
        user.jobs.splice(req.body.job, 1)
        user.save()
    })
    index(req, res)
}


module.exports = {
    create,
    index,
    detail,
    deleteJob
}