'use client';

import { useEffect, useState } from 'react';
import { toast } from 'sonner';

type Booking = {
  _id: string;
  fullName: string;
  email: string;
  telephone: string;
  details: string;
};

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/bookings', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('Failed to fetch bookings');
      const data = await res.json();
      setBookings(data);
    } catch {
      toast.error('Failed to fetch bookings');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this booking?')) return;
    try {
      const res = await fetch(`/api/bookings/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('Failed to delete booking');
      toast.success('Booking deleted');
      fetchBookings();
      setSelectedBooking(null);
    } catch {
      toast.error('Failed to delete booking');
    }
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-red-700 text-center">Manage Bookings</h1>

      {loading ? (
        <p className="text-center">Loading bookings...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden text-sm">
            <thead className="bg-red-100">
              <tr>
                <th className="p-3 text-left font-semibold">Full Name</th>
                <th className="p-3 text-left font-semibold hidden sm:table-cell">Email</th>
                <th className="p-3 text-left font-semibold hidden sm:table-cell">Phone</th>
                <th className="p-3 text-left font-semibold hidden lg:table-cell">Details Preview</th>
                <th className="p-3 text-right font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-4 text-center text-gray-400">
                    No bookings found.
                  </td>
                </tr>
              )}

              {bookings.map((booking) => (
                <tr
                  key={booking._id}
                  className="border-t hover:bg-red-50 transition duration-150"
                >
                  <td className="p-3">{booking.fullName}</td>
                  <td className="p-3 hidden sm:table-cell">{booking.email}</td>
                  <td className="p-3 hidden sm:table-cell">{booking.telephone}</td>
                  <td className="p-3 hidden lg:table-cell">
                    {booking.details.length > 50
                      ? booking.details.slice(0, 50) + '...'
                      : booking.details}
                  </td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => setSelectedBooking(booking)}
                      className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedBooking && (
        <div
          onClick={() => setSelectedBooking(null)}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg w-full max-w-md p-6 shadow-xl relative"
          >
            <button
              onClick={() => setSelectedBooking(null)}
              className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-gray-700"
              aria-label="Close modal"
            >
              &times;
            </button>

            <h2 className="text-2xl font-semibold mb-4 text-red-700">Booking Details</h2>
            <div className="space-y-2 text-sm sm:text-base">
              <p><strong>Full Name:</strong> {selectedBooking.fullName}</p>
              <p><strong>Email:</strong> {selectedBooking.email}</p>
              <p><strong>Phone:</strong> {selectedBooking.telephone}</p>
              <p className="whitespace-pre-wrap"><strong>Details:</strong> {selectedBooking.details}</p>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row justify-between gap-3">
              <a
                href={`mailto:${selectedBooking.email}`}
                className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded text-center hover:bg-blue-700"
              >
                Send Email
              </a>
              <a
                href={`tel:${selectedBooking.telephone}`}
                className="w-full sm:w-auto bg-green-600 text-white px-4 py-2 rounded text-center hover:bg-green-700"
              >
                Call Now
              </a>
              <button
                onClick={() => handleDelete(selectedBooking._id)}
                className="w-full sm:w-auto bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Delete Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
