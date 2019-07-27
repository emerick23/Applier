const express = require('express');
const router = express.Router();
const jobsCtrl = require('../../controllers/jobs');

/*---------- Public Routes ----------*/




/*---------- Protected Routes ----------*/
router.use(require('../../config/auth'))
router.post('/create', checkAuth, jobsCtrl.create);
router.post('/', checkAuth, jobsCtrl.index)

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'})
}


module.exports = router;