const express = require("express");
const BookingController = require("../controllers/booking.controller");
const router = express.Router();

const endPoint = "/booking";

router.get(`${endPoint}`, BookingController.getAll);
router.get(`${endPoint}/:id`, BookingController.getOne);
router.post(`${endPoint}`, BookingController.create);
router.put(`${endPoint}/:id`, BookingController.update);
router.delete(`${endPoint}/:id`, BookingController.delete);

module.exports = router;