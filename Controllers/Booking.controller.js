const mongoose = require("mongoose");
const User = require("../models/User");
const Booking = require("../models/Booking");

exports.bookMovieTicket = async (req, res) => {
  const { userId, movie, seat, price } = req.body;

  /*To create a transaction, you first need to create a session using Mongoose#startSession or Connection#startSession().*/

  const session = await mongoose.startSession();

  try {
    session.startTransaction(); // commit or abort transactions can use session.startTransaction() to start a transaction:

    // Check if the seat is already booked
    const existingBooking = await Booking.findOne({ movie, seat }).session(
      session
    );
    
    if (existingBooking) {
      throw new Error("Seat is already booked");
    }

    // Reserve the seat
    const booking = new Booking({ userId, movie, seat, price });
    await booking.save({ session });

    /*
    OR
    const booking = await Booking.create([{
    userId, movie, seat, price 
    }],{session})
    */

    // Deduct the ticket price from the user's account
    const user = await User.findOneAndUpdate(
      { _id: userId, balance: { $gte: price } },
      { $inc: { balance: -price } },
      { session, new: true }
    );

    if (!user) {
      throw new Error("Insufficient balance or user not found");
    }

    await session.commitTransaction();
    res.status(200).json({ message: "Ticket booked successfully!" });
  } catch (error) {
    await session.abortTransaction();
    res
      .status(500)
      .json({ message: "Transaction failed", error: error.message });
  } finally {
    session.endSession();
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("userId", "name");
    res.status(200).json(bookings);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching bookings", error: error.message });
  }
};
