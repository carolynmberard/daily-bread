const router = require('express').Router()
const { Bread } = require('../db')

// GET all breads from the database
router.get('/', async (req, res, next) => {
  try {
    const breads = await Bread.findAll()
    res.send(breads)
  } catch (err) {
    next(err)
  }
})

// GET a single bread from the database
router.get('/:breadId', async (req, res, next) => {
  try {
    const bread = await Bread.findByPk(req.params.breadId)
    res.send(bread)
  } catch (err) {
    next(err)
  }
})

// POST a new bread to the database
router.post('/', async (req, res, next) => {
  try {
    const newBread = await Bread.create(req.body)
    res.json(newBread)
  } catch (err) {
    next(err)
  }
})

// UPDATE an existing bread in the database
router.put('/:breadId', async (req, res, next) => {
  try {
    const bread = await Bread.findByPk(req.params.breadId)
    const updatedBread = await bread.update(req.body)
    res.send(updatedBread)
  } catch (err) {
    next(err)
  }
})

// DELETE an existing bread from the database
router.delete('/:breadId', async (req, res, next) => {
  try {
  const bread = await Bread.findByPk(req.params.breadId)
  await bread.destroy()
  res.send(bread)
  } catch (err) {
    next(err)
  }
})

module.exports = router
