import express from 'express';
import mongoose from 'mongoose';
import shortid from 'shortid';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Create Express app
const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Connect to your local MongoDB with database name "url-shortener"
mongoose.connect('mongodb://localhost:27017/url-shortener')
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Define URL schema
const urlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortId: { type: String, required: true, unique: true },
});

const URL = mongoose.model('URL', urlSchema);

// Route to create a short URL
app.post('/shorten', async (req, res) => {
  const { originalUrl } = req.body;
  const shortId = shortid.generate();

  const exists = await URL.findOne({ originalUrl });
  if (exists) {
    return res.json({ shortUrl: `http://localhost:5000/${exists.shortId}` });
  }

  await URL.create({ originalUrl, shortId });

  res.json({ shortUrl: `http://localhost:5000/${shortId}` });
});

// Route to redirect to original URL
app.get('/:shortId', async (req, res) => {
  const { shortId } = req.params;
  const entry = await URL.findOne({ shortId });

  if (!entry) {
    return res.status(404).send('Short URL not found');
  }

  res.redirect(entry.originalUrl);
});

// Start the server
app.listen(5000, () => {
  console.log('🌐 Server running at http://localhost:5000');
});
