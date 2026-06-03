// routes/bookingRoutes.js
const express = require("express");
const router = express.Router();
const Event = require("../models/Event");
const Booking = require("../models/Booking");

router.post("/", async (req, res) => {
  const { userName, eventId } = req.body;

  const event = await Event.findById(eventId);

  if (event.booked >= event.capacity) {
    return res.status(400).json({ message: "Event full" });
  }

  const booking = new Booking({ userName, eventId });
  await booking.save();

  event.booked += 1;
  await event.save();

  res.json(booking);
});

module.exports = router;