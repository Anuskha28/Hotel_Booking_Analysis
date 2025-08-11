import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import CityHotelsPage from './pages/CityHotelsPage.jsx';
import HotelDetailPage from './pages/HotelDetailPage.jsx';

export default function App() {
  return (
    <div className="app">
      <header className="container" style={{ padding: '16px 0' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1>BookNow</h1>
        </Link>
      </header>
      <main className="container" style={{ paddingBottom: 40 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/city/:cityId" element={<CityHotelsPage />} />
          <Route path="/hotel/:hotelId" element={<HotelDetailPage />} />
        </Routes>
      </main>
      <footer className="container" style={{ padding: '12px 0', borderTop: '1px solid #eee', color: '#666' }}>
        © {new Date().getFullYear()} BookNow
      </footer>
    </div>
  );
}
