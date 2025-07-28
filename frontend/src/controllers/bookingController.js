import dbConnect from '@/lib/dbConnect'; 
import Booking from '@/models/Booking';

export const getBookings = async (req, res) => {
  await dbConnect();
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch bookings' });
  }
};

export const getBookingById = async (req, res) => {
  await dbConnect();
  const { id } = req.query;
  try {
    const booking = await Booking.findById(id);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch booking' });
  }
};

export const createBooking = async (req, res) => {
  await dbConnect();
  const { fullName, email, details } = req.body;
  if (!fullName || !email || !details) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  try {
    const newBooking = await Booking.create({ fullName, email, details });
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create booking' });
  }
};

export const updateBooking = async (req, res) => {
  await dbConnect();
  const { id } = req.query;
  const { fullName, email, details } = req.body;
  if (!fullName || !email || !details) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      id,
      { fullName, email, details },
      { new: true }
    );
    if (!updatedBooking) return res.status(404).json({ message: 'Booking not found' });
    res.status(200).json(updatedBooking);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update booking' });
  }
};

export const deleteBooking = async (req, res) => {
  await dbConnect();
  const { id } = req.query;
  try {
    const deleted = await Booking.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'Booking not found' });
    res.status(200).json({ message: 'Booking deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete booking' });
  }
};
