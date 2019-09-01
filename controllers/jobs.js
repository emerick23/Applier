var User = require('../models/user')

async function create(req, res) {
    try {
        const user = await User.findById(req.body.user._id)
        user.jobs.push(req.body.job)
        user.save()
        index(req, res)
    } catch (err) {
        res.json({ err })
    }
}

async function index(req, res) {
    const user = await User.findById(req.body.user._id)
    res.json(user.jobs)
}

async function detail(req, res) {
    try {
        const user = await User.findById(req.body.user._id)
        const job = user.jobs.id(req.body.job._id)
        const idx = user.jobs.indexOf(job)
        user.jobs.splice(idx, 1, req.body.job)
        user.save()
        index(req, res)
    } catch (err) {
        res.json({ err })
    }
}

async function deleteJob(req, res) {
    try {
        const user = await User.findById(req.body.user._id)
        user.jobs.splice(req.body.job, 1)
        user.save()
        index(req, res)
    } catch (err) {
        res.json({ err })
    }
}



module.exports = {
    create,
    index,
    detail,
    deleteJob
}