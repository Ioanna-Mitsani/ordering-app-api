const router = require("express").Router();
const getStoreById = require("../../database/actions/data");

router.get("/:id", (req, res, next) => {
  getStoreById(req.params.id)
    .then((stores) => {
      const store = stores.find((store) => store.id === req.params.id);
      if (store) {
        res.status(200).send(store);
      } else {
        res.status(404).send({
          message: "Store not found",
        });
      }
    })
    .catch(next);
});

module.exports = router;
