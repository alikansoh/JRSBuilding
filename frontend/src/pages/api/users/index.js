import { createUser, getAllUsers } from '@/controllers/userController';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const users = await getAllUsers();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else if (req.method === 'POST') {
    try {
      const id = await createUser(req.body);
      res.status(201).json({ message: 'User created', id });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  } else {
    res.status(405).end();
  }
}
