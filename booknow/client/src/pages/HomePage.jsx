import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchCities } from '../services/api';

export default function HomePage() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCities()
      .then(setCities)
      .catch(() => setError('Failed to load cities'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading cities...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
        {cities.map(city => (
          <Link key={city.id} to={`/city/${city.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ border: '1px solid #eee', borderRadius: 8, overflow: 'hidden' }}>
              <div style={{ height: 140, background: `url(${city.image}) center/cover no-repeat` }} />
              <div style={{ padding: 12 }}>
                <h3 style={{ margin: 0 }}>{city.name}</h3>
                <p style={{ margin: '4px 0', color: '#666' }}>{city.country}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}