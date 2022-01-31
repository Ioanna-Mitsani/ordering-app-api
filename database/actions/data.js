const StoreSchema = require("../models/store");

const getStores = async () => {
  return await StoreSchema.find();
};

const getStoreById = async (id) => {
  return await StoreSchema.findOne({ id: id });
};

module.exports = getStores;
