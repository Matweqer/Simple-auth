const Router = require('express')
const controller = require('./authController')
const {check} = require('express-validator')
// const authMiddleware = require('./middleware/authMiddleware')
const roleMiddleware = require('./middleware/roleMiddleware')

const router = new Router()

router.post('/registration', [
    check('username', 'The user name cannot be empty!').notEmpty(),
    check('password', 'The password must be longer than 4 characters!').isLength({min: 4, max: 30}),
], controller.registration)
router.post('/login', controller.login)
router.get('/users', roleMiddleware(['ADMIN']), controller.getUser)

module.exports = router;

