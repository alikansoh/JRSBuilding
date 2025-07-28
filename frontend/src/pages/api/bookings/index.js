import { getBookings, createBooking } from '@/controllers/bookingController';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return getBookings(req, res);
  }
  if (req.method === 'POST') {
    return createBooking(req, res);
  }
  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
