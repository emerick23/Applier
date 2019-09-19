var User = require('../models/user')


async function index(req, res) {
    const user = await User.findById(req.body.user._id)
    res.json(user.jobs)
}

async function jobCreate(req, res) {
    try {
        const user = await User.findById(req.body.user._id)
        const newJob = req.body.job
        user.jobs.push(newJob)
        user.save()
        res.json('Job created successfully')
    } catch (err) {
        res.json({ err })
    }
}

async function jobUpdate(req, res) {
    try {
        const user = await User.findById(req.body.user._id)
        const oldJob = user.jobs.id(req.body.job._id)
        const idx = user.jobs.indexOf(oldJob)
        user.jobs.splice(idx, 1, req.body.job)
        user.save()
        res.json('Job updated sucessfully')
    } catch (err) {
        res.json({ err })
    }
}

async function jobDelete(req, res) {
    try {
        const user = await User.findById(req.body.user._id)
        user.jobs.splice(req.body.job, 1)
        user.save()
        res.json('Job deleted successfully')
    } catch (err) {
        res.json({ err })
    }
}



module.exports = {
    index,
    jobCreate,
    jobUpdate,
    jobDelete
}