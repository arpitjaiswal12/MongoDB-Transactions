const express = require('express');
const bookingController = require('../Controllers/Booking.controller.js');

const router = express.Router();

router.post('/book-ticket', bookingController.bookMovieTicket);
router.get('/get-bookings', bookingController.getAllBookings);

module.exports = router;
