const express = require('express');
const env = require('dotenv');
const app = express();
const mongoose = require('mongoose');
const authenticateRoutes = require('./routes/authenticate');

// calling environment variables and constants
env.config();

// mongodb connection string
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@store-cluster.4inst.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log('MongoDB connected');
  });

// Using Json parser
app.use(express.json());

app.use('/api', authenticateRoutes);

app.listen(process.env.PORT, () => {
  console.log('Server is running at PORT', process.env.PORT);
});
