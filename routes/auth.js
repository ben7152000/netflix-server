const router = require('express').Router()
const User = require('../models/User') // 使用者資料庫
const bcrypt = require('bcrypt') // 加密套件
const jwt = require('jsonwebtoken') // jwt 套件

// 註冊
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body
    const salt = await bcrypt.genSalt(10) // 建立鹽
    const hashPassword = await bcrypt.hash(password, salt) // 密碼加密
    const newUser = new User({
      username,
      email,
      password: hashPassword
    })
    // 建立新使用者
    const user = await newUser.save()
    return res.status(201).json(user)
  } catch (err) {
    return res.status(500).json(err)
  }
})

// 登入
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    // 找不到使用者
    if (!user) {
      return res.status(401).json('使用者錯誤或密碼錯誤')
    }
    // 密碼比較
    const comparePassword = await bcrypt.compare(password, user.password)

    // 密碼不正確
    if (!comparePassword) {
      return res.status(401).json('密碼不正確')
    }

    // token 製作
    const accessToken = jwt.sign(
      // 參雜 使用者 id, 使用者權限
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY,
      // 時效 1 day
      { expiresIn: '1d' }
    )

    const { password: notSendPassword, ...info } = user._doc

    return res.status(200).json({ ...info, accessToken })
  } catch (err) {
    return res.status(500).json(err)
  }
})

module.exports = router
