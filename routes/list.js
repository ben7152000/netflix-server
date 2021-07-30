const router = require('express').Router()
const List = require('../models/List')
const verify = require('../verifyToken') // 確認有無 token

// 建立電影清單
router.post('/', verify, async (req, res) => {
  const { isAdmin } = req.user
  // 權限檢查
  if (isAdmin) {
    const newList = new List(req.body)
    try {
      const savedList = await newList.save()
      return res.status(201).json(savedList)
    } catch (err) {
      return res.status(500).json(err)
    }
  } else {
    return res.status(403).json('權限不足')
  }
})

// 取得電影清單
router.get('/', verify, async (req, res) => {
  const typeQuery = req.query.type
  const genreQuery = req.query.genre
  let list = []
  // 如果有 type or genre
  try {
    if (typeQuery) {
      if (genreQuery) {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery, genre: genreQuery } }
        ])
      } else {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery } }
        ])
      }
    } else {
      list = await List.aggregate([{ $sample: { size: 10 } }])
    }
    return res.status(200).json(list)
  } catch (err) {
    return res.status(500).json(err)
  }
})

// 刪除電影清單
router.delete('/:id', verify, async (req, res) => {
  const { isAdmin } = req.user
  const id = req.params.id
  // 權限檢查
  if (isAdmin) {
    try {
      await List.findByIdAndDelete(id)
      return res.status(201).json('電影清單已刪除')
    } catch (err) {
      return res.status(500).json(err)
    }
  } else {
    return res.status(403).json('權限不足')
  }
})

module.exports = router
