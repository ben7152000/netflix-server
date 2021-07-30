const jwt = require('jsonwebtoken')

module.exports = function verify (req, res, next) {
  // 存到 headers 的 authorization 中
  const authHeader = req.headers.authorization
  if (authHeader) {
    // 前面有 Bearer 取出 token
    const token = authHeader.split(' ')[1]
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      // token 失效
      if (err) {
        return res.status(403).json('Token 無效')
      }
      req.user = user
      next()
    })
  } else {
    return res.status(401).json('未得到授權')
  }
}
