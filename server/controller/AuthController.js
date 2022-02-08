require('dotenv').config()
const User = require('../model/ModelUser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class AuthController {
    async register(req, res) {
        try {
            const {login, password} = req.body

            const candidate = await User.findOne({login})

            if (candidate) {
                return res.status(200).json({
                    message: 'Такой пользователь уже существует!'
                })
            }

            const hashPassword = await bcrypt.hash(password, 10)
            const user = new User({login, password: hashPassword})
            await user.save()

            res.status(201).json({
                message: 'Пользователь создан!'
            })
        } catch (e) {
            res.status(501).json({
                message: 'Что-то пошло не так!'
            })
        }
    }

    async login(req, res) {
        try {
            const {login, password} = req.body

            const user = await User.findOne({login})

            if (!user) {
                return res.status(200).json({
                    token: false,
                    message: 'Такого пользователя нет!'
                })
            }

            const hashPassword = await bcrypt.compare(password, user.password)

            if (!hashPassword) {
                return res.status(200).json({
                    message: 'Неверный пароль!'
                })
            }

            const token = jwt.sign({user: login}, process.env.SECRET_KEY)

            res.status(200).cookie('token', token).json({
                token: true,
                message: 'Вы успешно авторизованы'
            })
        } catch (e) {
            res.status(501).json({
                message: 'Что-то пошло не так!'
            })
        }
    }

    async checkToken(req, res) {
        try {
            const {token} = req.cookies

            if (token == undefined) {
                return res.status(200).json({
                    token: false,
                    message: 'Вы еще не авторизованы!'
                })
            }

            res.status(200).json({
                token: true,
                message: "Токен есть"
            })
        } catch (e) {
            res.status(501).json({
                message: 'Что-то пошло не так!'
            })
        }
    }

    async logout(req, res) {
        try {
            res.status(200).clearCookie('token').json({
                message: 'Вы вышли!'
            })
        } catch (e) {
            res.status(501).json({
                message: 'Что-то пошло не так!'
            })
        }
    }
}

module.exports = new AuthController()