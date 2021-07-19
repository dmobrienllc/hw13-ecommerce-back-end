const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

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
  Tag.create(req.body)
    .then((category) => {
      res.status(200).json(category);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then((category) => {
    res.json(category);
  })
  .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedTag) => {
      res.json(deletedTag);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
