const express = require('express');
const router = express.Router();
const jobsCtrl = require('../../controllers/jobs');

/*---------- Public Routes ----------*/




/*---------- Protected Routes ----------*/
router.use(require('../../config/auth'))
router.post('/', checkAuth, jobsCtrl.index)
router.post('/create', checkAuth, jobsCtrl.jobCreate)
router.post('/update', checkAuth, jobsCtrl.jobUpdate)
router.post('/delete', checkAuth, jobsCtrl.jobDelete)
router.post('/detail', checkAuth, jobsCtrl.jobDetail)

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'})
}


module.exports = router;