const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Helper function to check if a number is prime
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// Message Validation Endpoint
app.post('/send-message', (req, res) => {
  const { message, p, q } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is missing', code: 1001 });
  }
  if (!p || !q) {
    return res.status(400).json({ error: 'Both prime numbers (p and q) are required', code: 1002 });
  }
  if (typeof p !== 'number' || typeof q !== 'number') {
    return res.status(400).json({ error: 'Prime numbers must be numeric', code: 1003 });
  }
  if (!isPrime(p)) {
    return res.status(400).json({ error: Number p (${p}) is not a prime number, code: 1004 });
  }
  if (!isPrime(q)) {
    return res.status(400).json({ error: Number q (${q}) is not a prime number, code: 1005 });
  }

  // Simple encryption (e.g., append the product of p and q to the message)
  const n = p * q;
  const encryptedMessage = ${message}-${n};

  res.json({ message: 'Message is valid and sent', encryptedMessage, isAccepted: true });
});

app.listen(PORT, () => {
  console.log(Server running on http://localhost:${PORT});
});