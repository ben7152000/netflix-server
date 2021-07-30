const router = require('express').Router()
const Movie = require('../models/Movie')
const verify = require('../verifyToken') // 確認有無 token

// 建立電影
router.post('/', verify, async (req, res) => {
  const { isAdmin } = req.user
  // 權限檢查
  if (isAdmin) {
    const newMovie = new Movie(req.body)
    try {
      const savedMovie = await newMovie.save()
      return res.status(201).json(savedMovie)
    } catch (err) {
      return res.status(500).json(err)
    }
  } else {
    return res.status(403).json('權限不足')
  }
})

// 取得個別電影
router.get('/find/:id', verify, async (req, res) => {
  const id = req.params.id
  try {
    const movie = await Movie.findById(id)
    return res.status(200).json(movie)
  } catch (err) {
    return res.status(500).json(err)
  }
})

// 取得所有電影
router.get('/', verify, async (req, res) => {
  const { isAdmin } = req.user
  // 權限檢查
  if (isAdmin) {
    try {
      const movies = await Movie.find()
      return res.status(200).json(movies.reverse())
    } catch (err) {
      return res.status(500).json(err)
    }
  } else {
    return res.status(403).json('權限不足')
  }
})

// 取得隨機電影
router.get('/random', verify, async (req, res) => {
  const type = req.query.type
  let movie
  try {
    // 是否是系列類型
    if (type === 'series') {
      movie = await Movie.aggregate([
        { $match: { isSeries: true } },
        { $sample: { size: 1 } }
      ])
    } else {
      movie = await Movie.aggregate([
        { $match: { isSeries: false } },
        { $sample: { size: 1 } }
      ])
    }
    return res.status(200).json(movie)
  } catch (err) {
    return res.status(500).json(err)
  }
})

// 更新個別電影
router.put('/:id', verify, async (req, res) => {
  const { isAdmin } = req.user
  const id = req.params.id
  // 權限檢查
  if (isAdmin) {
    try {
      const updatedMovie = await Movie.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true }
      )
      return res.status(200).json(updatedMovie)
    } catch (err) {
      return res.status(500).json(err)
    }
  } else {
    return res.status(403).json('權限不足')
  }
})

// 刪除電影
router.delete('/:id', verify, async (req, res) => {
  const { isAdmin } = req.user
  const id = req.params.id
  // 權限檢查
  if (isAdmin) {
    try {
      await Movie.findByIdAndDelete(id)
      return res.status(200).json('電影已刪除')
    } catch (err) {
      return res.status(500).json(err)
    }
  } else {
    return res.status(403).json('權限不足')
  }
})

module.exports = router
