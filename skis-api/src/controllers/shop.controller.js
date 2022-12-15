const Shop = require("../models/shop.model");

const ShopController = {
  create: async (req, res) => {
    try {
      const data = req.body;
      const shop = await Shop.create(data);
      await shop.save();
      res.send(shop);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      const deleteShop = await Shop.findByIdAndDelete(req.params.id);
      res.send(deleteShop);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
  update: async (req, res) => {
    try {
      const newShop = req.body;
      Shop.findByIdAndUpdate(req.params.id, newShop).then((data) =>
        res.send(data)
      );
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
  getAll: async (req, res) => {
    try {
      const shops = await Shop.find().populate("posts").populate("bookings");
      res.send(shops);
    } catch (error) {
      res.status(404).send({ message: error.message });
    }
  },
};

module.exports = ShopController;
