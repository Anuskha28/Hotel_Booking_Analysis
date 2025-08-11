import express from 'express';
import cors from 'cors';
import { cities, hotels, facilities } from './data/hotels.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/cities', (req, res) => {
  res.json(cities);
});

app.get('/api/facilities', (req, res) => {
  res.json(facilities);
});

app.get('/api/hotels', (req, res) => {
  const { cityId, minRating, facility, q, page = 1, limit = 20 } = req.query;
  let filtered = [...hotels];

  if (cityId) {
    filtered = filtered.filter(h => String(h.cityId) === String(cityId));
  }
  if (minRating) {
    const min = Number(minRating);
    filtered = filtered.filter(h => Number(h.rating) >= min);
  }
  if (facility) {
    const reqFacilities = Array.isArray(facility) ? facility : String(facility).split(',');
    filtered = filtered.filter(h => reqFacilities.every(f => h.facilities.includes(f)));
  }
  if (q) {
    const term = String(q).toLowerCase();
    filtered = filtered.filter(h =>
      h.name.toLowerCase().includes(term) ||
      h.address.toLowerCase().includes(term) ||
      h.description.toLowerCase().includes(term)
    );
  }

  const pageNum = Number(page) || 1;
  const limitNum = Math.min(Number(limit) || 20, 100);
  const start = (pageNum - 1) * limitNum;
  const end = start + limitNum;
  const total = filtered.length;

  res.json({
    total,
    page: pageNum,
    limit: limitNum,
    results: filtered.slice(start, end),
  });
});

app.get('/api/hotels/:id', (req, res) => {
  const hotel = hotels.find(h => String(h.id) === String(req.params.id));
  if (!hotel) return res.status(404).json({ message: 'Hotel not found' });
  const city = cities.find(c => c.id === hotel.cityId);
  res.json({ ...hotel, city });
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});