const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', async (req, res) => {
  const categoryData = await Category.findAll({include:Product}).catch((err) => {
    res.json(err);
  });
  res.json(categoryData);
});

router.get('/:id', async (req, res) => {
  const categoryData = await Category.findByPk(req.params.id,{include:Product}).catch((err) => {
    res.json(err);
  });
  res.json(categoryData);
});

router.post('/', (req, res) => {
  Category.create(req.body)
    .then((category) => {
      res.status(200).json(category);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then((category) => {
    res.json(category);
  })
  .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedCategory) => {
      res.json(deletedCategory);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
