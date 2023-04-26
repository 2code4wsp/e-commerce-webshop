const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
 Category.findAll({include: Product}).then(categoryData => res.json(categoryData))
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({include: Product}).then(categoryData => res.json(categoryData))
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create({
      category_name: req.body.category_name,
    });
  } catch (err) {
    res.status(400).json(err);
  }
  // Category.create(req.body)
  //   .then((newCategory) => {
  //     res.json(newCategory)
  //   })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
