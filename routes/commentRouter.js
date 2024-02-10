const Router = require('express').Router()
const commentCtrl = require('../controllers/commentCtrl')
const auth = require('../middleware/auth')

Router.post('/comment', auth, commentCtrl.createComment)


module.exports = Router