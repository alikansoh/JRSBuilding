'use client';

import { useEffect, useState } from 'react';
import { toast } from 'sonner';

type User = {
  _id: string;
  username: string;
};

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [editUsername, setEditUsername] = useState('');
  const [editPassword, setEditPassword] = useState('');
  const [editingUserId, setEditingUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/users', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      toast.error('Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleCreate = async () => {
    if (!newUsername || !newPassword) return toast.error('All fields required');
    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ username: newUsername, password: newPassword }),
      });
      if (!res.ok) throw new Error('Error creating user');
      toast.success('User created');
      setNewUsername('');
      setNewPassword('');
      fetchUsers();
    } catch (err) {
      toast.error('Failed to create user');
    }
  };

  const handleEdit = async () => {
    if (!editUsername) return toast.error('Username is required');
    try {
      const res = await fetch(`/api/users/${editingUserId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}` },
        body: JSON.stringify({ username: editUsername, password: editPassword }),
      });
      if (!res.ok) throw new Error('Error updating user');
      toast.success('User updated');
      setEditUsername('');
      setEditPassword('');
      setEditingUserId(null);
      fetchUsers();
    } catch (err) {
      toast.error('Failed to update user');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this user?')) return;
    try {
      await fetch(`/api/users/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success('User deleted');
      fetchUsers();
    } catch {
      toast.error('Failed to delete');
    }
  };

  const startEdit = (user: User) => {
    setEditingUserId(user._id);
    setEditUsername(user.username);
    setEditPassword('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-red-600">User Management</h1>

      {/* Create User Form */}
      <div className="bg-white border border-red-300 shadow-md rounded-xl p-6 mb-10">
        <h2 className="text-xl font-semibold mb-4 text-red-500">Add New User</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 border border-red-300 rounded"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-red-300 rounded"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button
            onClick={handleCreate}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded"
          >
            Create User
          </button>
        </div>
      </div>

      {/* Edit User Form */}
      {editingUserId && (
        <div className="bg-white border border-yellow-300 shadow-md rounded-xl p-6 mb-10">
          <h2 className="text-xl font-semibold mb-4 text-yellow-500">Edit User</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 border border-yellow-300 rounded"
              value={editUsername}
              onChange={(e) => setEditUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="New Password (optional)"
              className="w-full p-3 border border-yellow-300 rounded"
              value={editPassword}
              onChange={(e) => setEditPassword(e.target.value)}
            />
            <div className="flex items-center gap-4">
              <button
                onClick={handleEdit}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded"
              >
                Update User
              </button>
              <button
                onClick={() => {
                  setEditingUserId(null);
                  setEditUsername('');
                  setEditPassword('');
                }}
                className="text-sm text-yellow-500 underline"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Users Table */}
      <div className="overflow-x-auto">
        {loading ? (
          <p className="text-gray-500">Loading users...</p>
        ) : (
          <table className="w-full border border-red-200 text-sm">
            <thead>
              <tr className="bg-red-100 text-red-700">
                <th className="text-left px-4 py-2">Username</th>
                <th className="text-right px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="border-t hover:bg-red-50">
                  <td className="px-4 py-2">{user.username}</td>
                  <td className="px-4 py-2 text-right space-x-2">
                    <button
                      onClick={() => startEdit(user)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan={2} className="text-center text-gray-400 py-6">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
