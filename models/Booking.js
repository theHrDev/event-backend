
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userName: String,
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event"
  }
});

module.exports = mongoose.model("Booking", bookingSchema);