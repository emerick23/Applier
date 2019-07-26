var User = require('../models/user')

async function create(req, res) {
    let user = await User.findById(req.body.user._id)
    user.jobs.push(req.body.job)
    user.save()
}

module.exports = {
    create
}