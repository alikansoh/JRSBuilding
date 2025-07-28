import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret';

export default async function handler(req, res) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    // token is valid, proceed to return users
    const users = await getUsers(); // your function to get users
    res.status(200).json(users);
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
}
