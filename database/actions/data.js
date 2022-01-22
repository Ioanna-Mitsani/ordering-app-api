const StoreSchema = require('../models/store');

const getStores = async () => {
    return await StoreSchema.find();
}

module.exports = getStores