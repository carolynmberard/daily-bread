'use strict'

const router = require('express').Router()
const breadRouter = require('./breads')

router.use('/breads', breadRouter)

router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router
