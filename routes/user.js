const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt') // 加密套件
const verify = require('../verifyToken') // 確認有無 token

// 取得個別使用者
router.get('/find/:id', async (req, res) => {
  try {
    const id = req.params.id
    const user = await User.findById(id)
    const { password: notSendPassword, ...info } = user._doc
    return res.status(200).json(info)
  } catch (err) {
    return res.status(500).json(err)
  }
})

// 取得所有使用者
router.get('/', verify, async (req, res) => {
  const newQuery = req.query.new
  const isAdmin = req.user.isAdmin // 取出權限
  if (isAdmin) {
    try {
      const users = newQuery ? await User.find().sort({ _id: -1 }).limit(5) : await User.find()
      return res.status(200).json(users)
    } catch (err) {
      return res.status(500).json(err)
    }
  } else {
    res.status(403).json('無權限看所有使用者')
  }
})

// 更新使用者資訊
router.put('/:id', verify, async (req, res) => {
  const { id: userId, isAdmin } = req.user // 取出 id 與權限
  const id = req.params.id
  // 使用者使否有權限或是自己的
  if (userId === id || isAdmin) {
    // 如果要改密碼
    const { password } = req.body
    if (password) {
      req.body.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
    }
    try {
      // 重新寫入
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true }
      )
      return res.status(200).json(updatedUser)
    } catch (err) {
      return res.status(500).json(err)
    }
  } else {
    return res.status(403).json('只能更新自己的資訊')
  }
})

// 刪除使用者
router.delete('/:id', verify, async (req, res) => {
  const { id: userId, isAdmin } = req.user // 取出 id 與權限
  const id = req.params.id
  if (userId === id || isAdmin) {
    try {
      await User.findByIdAndDelete(id)
      return res.status(200).json('使用者已刪除')
    } catch (err) {
      return res.status(500).json(err)
    }
  } else {
    return res.status(403).json('只能刪除自己的資訊')
  }
})

module.exports = router
