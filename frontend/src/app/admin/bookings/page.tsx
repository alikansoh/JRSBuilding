'use client';

import { useEffect, useState } from 'react';
import { toast } from 'sonner';

type Booking = {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
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
    } catch {
      toast.error('Failed to delete booking');
    }
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-red-700 text-center">Manage Bookings</h1>

      {loading ? (
        <p className="text-center">Loading bookings...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-red-100">
              <tr>
                <th className="p-3 text-left text-sm font-semibold">Full Name</th>
                <th className="p-3 text-left text-sm font-semibold">Email</th>
                <th className="p-3 text-left text-sm font-semibold hidden sm:table-cell">Phone</th>
                <th className="p-3 text-left text-sm font-semibold hidden sm:table-cell">Details Preview</th>
                <th className="p-3 text-right text-sm font-semibold">Actions</th>
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
                  className="border-t hover:bg-red-50 cursor-pointer"
                  onClick={() => setSelectedBooking(booking)}
                >
                  <td className="p-3 text-sm">{booking.fullName}</td>
                  <td className="p-3 text-sm">{booking.email}</td>
                  <td className="p-3 text-sm hidden sm:table-cell">{booking.phone}</td>
                  <td className="p-3 text-sm hidden sm:table-cell">
                    {booking.details.length > 50
                      ? booking.details.slice(0, 50) + '...'
                      : booking.details}
                  </td>
                  <td className="p-3 text-right space-x-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(booking._id);
                      }}
                      className="text-sm px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
                      aria-label={`Delete booking for ${booking.fullName}`}
                    >
                      Delete
                    </button>

                    <a
                      href={`mailto:${booking.email}`}
                      onClick={(e) => e.stopPropagation()}
                      className="text-sm px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                      aria-label={`Send email to ${booking.email}`}
                    >
                      Email
                    </a>

                    <a
                      href={`tel:${booking.phone}`}
                      onClick={(e) => e.stopPropagation()}
                      className="text-sm px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
                      aria-label={`Call ${booking.phone}`}
                    >
                      Call
                    </a>
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
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg max-w-lg w-full p-6 shadow-lg relative"
          >
            <h2 className="text-2xl font-semibold mb-4 text-red-700">Booking Details</h2>
            <p>
              <strong>Full Name:</strong> {selectedBooking.fullName}
            </p>
            <p>
              <strong>Email:</strong> {selectedBooking.email}
            </p>
            <p>
              <strong>Phone:</strong> {selectedBooking.phone}
            </p>
            <p className="mt-4 whitespace-pre-wrap">
              <strong>Details:</strong> {selectedBooking.details}
            </p>

            <button
              onClick={() => setSelectedBooking(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
