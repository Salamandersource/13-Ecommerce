const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  const data = Tag.findAll();
  include: [{ model: Product, through: ProductTag, as: "product_tags" }];
  // be sure to include its associated Products
  return res.status(200).json(data);

  // be sure to include its associated Product data
});

router.get("/:id", async (req, res) => {
  const data = Tag.findOne({
    where: { id: req.params.id },
    include: [{ model: Product, through: ProductTag, as: "product_tags" }],
  });
  return res.status(200).json(data);
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post("/", (req, res) => {
  // create a new tag
  const data = Tag.create(req.body);
  return res.status(200).json(data);
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  const data = Tag.update(req.body, {
    where: { id: req.params.id },
  });
  return res.status(200).json(data);
});

router.delete("/:id", async (req, res) => {
  const data = await Tag.destroy({
    where: { id: req.params.id },
  });
  return res.status(200).json(data);
  // delete on tag by its `id` value
});

module.exports = router;
