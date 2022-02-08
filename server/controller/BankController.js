const Bank = require('../model/ModelBank')

class BankController {
    async createTransaction(req, res) {
        try {
            const {amount, bankId} = req.body

            const transition = new Bank({amount, bankId})
            await transition.save()

            res.status(201).json({
                message: 'Транзакция успешно добавлено!',
                transition
            })
        } catch (e) {
            res.status(501).json({
                message: 'Что-то пошло не так!'
            })
        }
    }

    async deleteTransaction(req, res) {
        try {
            const {id} = req.body

            const transitions = await Bank.deleteOne({id})

            res.status(200).json({
                message: 'Успешно удалено!',
                transitions
            })
        } catch (e) {
            res.status(501).json({
                message: 'Что-то пошло не так!'
            })
        }
    }

    async getTransaction(req, res) {
        try {
            const transitions = await Bank.find()

            res.status(200).json(transitions)
        } catch (e) {
            res.status(501).json({
                message: 'Что-то пошло не так!'
            })
        }
    }
}

module.exports = new BankController()