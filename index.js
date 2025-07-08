require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Basic route
app.get('/', (req, res) => {
  res.send('Sattva Millets Backend API');
});

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// TODO: Add routes for products, orders, admin

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
