const {Router} = require('express')
const AuthController = require('../controller/AuthController')

const router = Router()

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/check', AuthController.checkToken)
router.get('/logout', AuthController.logout)

module.exports = router