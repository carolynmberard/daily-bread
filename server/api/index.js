'use strict'

const router = require('express').Router()
const breadRouter = require('./breads')

// Since breads is my only api, using router isn't necessary,
// though it sets the stage for adding additional api's as
// the codebase grows
router.use('/breads', breadRouter)

router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router
