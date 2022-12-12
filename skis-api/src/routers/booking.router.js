const express = require("express");
const BookingController = require("../controllers/booking.controller");
const router = express.Router();

const endPoint = "/bookings";

router.post(`${endPoint}`, BookingController.create);
router.delete(`${endPoint}/:id`, BookingController.delete);
router.get(`${endPoint}/:id`, BookingController.getAllBookingByPost);

module.exports = router;
