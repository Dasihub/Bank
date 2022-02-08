const {Router} = require('express')
const BankController = require('../controller/BankController')

const router = Router()

router.post('/transition', BankController.createTransaction)
router.delete('/transition', BankController.deleteTransaction)
router.get('/transition', BankController.getTransaction)

module.exports = router