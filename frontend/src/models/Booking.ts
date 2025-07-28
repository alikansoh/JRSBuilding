import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  telephone: { type: String, required: true },  // <-- Added telephone here
  details: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema);
