const router = require("express").Router();
const getStores = require("../../database/actions/data");

router.get("/stores", (req, res, next) => {
  getStores()
    .then((stores) => res.status(200).send(stores))
    .catch(next);
});

router.get("/stores/:id", (req, res, next) => {
  getStores()
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
