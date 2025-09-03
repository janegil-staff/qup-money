import jwt from "jsonwebtoken";

function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "No token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // 👈 now you have access to userId, email, etc.
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
}
