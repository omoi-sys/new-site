const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { 
  useNewUrlParser: true, 
  useCreateIndex: true, 
  useUnifiedTopology: true
});

const conn = mongoose.connection;
conn.once('open', () => {
    console.log('MongoDB connected without issues.');
})

const courses = require('./routes/courses');
app.use('/', courses);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});