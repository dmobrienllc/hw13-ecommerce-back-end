const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  const tagData = await Tag.findAll({include:Product}).catch((err) => {
    res.json(err);
  });
  res.json(tagData);
});

router.get('/:id', async(req, res) => {
  const tagData = await Tag.findByPk(req.params.id,{include:Product}).catch((err) => {
    res.json(err);
  });
  res.json(tagData);
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
