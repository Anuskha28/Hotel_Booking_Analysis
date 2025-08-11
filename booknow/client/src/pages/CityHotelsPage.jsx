import { useEffect, useMemo, useState } from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';
import { fetchCities, fetchFacilities, fetchHotels } from '../services/api';

export default function CityHotelsPage() {
  const { cityId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [city, setCity] = useState(null);
  const [hotelsData, setHotelsData] = useState({ total: 0, results: [] });
  const [facilities, setFacilities] = useState([]);
  const [loading, setLoading] = useState(true);

  const minRating = searchParams.get('minRating') || '';
  const facilityParams = searchParams.get('facility') || '';
  const query = searchParams.get('q') || '';

  const selectedFacilities = useMemo(() => (facilityParams ? facilityParams.split(',') : []), [facilityParams]);

  useEffect(() => {
    setLoading(true);
    Promise.all([fetchCities(), fetchFacilities()])
      .then(([cities, facs]) => {
        setFacilities(facs);
        const found = cities.find(c => String(c.id) === String(cityId));
        setCity(found || null);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [cityId]);

  useEffect(() => {
    setLoading(true);
    fetchHotels({ cityId, minRating: minRating || undefined, facility: selectedFacilities, q: query || undefined })
      .then(setHotelsData)
      .finally(() => setLoading(false));
  }, [cityId, minRating, facilityParams, query]);

  function toggleFacility(f) {
    const next = new Set(selectedFacilities);
    if (next.has(f)) next.delete(f); else next.add(f);
    const value = Array.from(next).join(',');
    const nextParams = new URLSearchParams(searchParams);
    if (value) nextParams.set('facility', value); else nextParams.delete('facility');
    setSearchParams(nextParams);
  }

  function onRatingChange(e) {
    const v = e.target.value;
    const nextParams = new URLSearchParams(searchParams);
    if (v) nextParams.set('minRating', v); else nextParams.delete('minRating');
    setSearchParams(nextParams);
  }

  function onQueryChange(e) {
    const v = e.target.value;
    const nextParams = new URLSearchParams(searchParams);
    if (v) nextParams.set('q', v); else nextParams.delete('q');
    setSearchParams(nextParams);
  }

  if (!city) return <p>Loading...</p>;

  return (
    <div>
      <h2 style={{ marginTop: 0 }}>{city.name} Hotels</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 24 }}>
        <aside style={{ border: '1px solid #eee', borderRadius: 8, padding: 12, height: 'fit-content' }}>
          <div style={{ marginBottom: 12 }}>
            <input type="text" placeholder="Search hotels" value={query} onChange={onQueryChange} style={{ width: '100%', padding: 8 }}/>
          </div>
          <div style={{ marginBottom: 12 }}>
            <label style={{ display: 'block', marginBottom: 6, fontWeight: 600 }}>Minimum Rating</label>
            <select value={minRating} onChange={onRatingChange} style={{ width: '100%', padding: 8 }}>
              <option value="">Any</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="4.5">4.5+</option>
            </select>
          </div>
          <div>
            <div style={{ fontWeight: 600, marginBottom: 6 }}>Facilities</div>
            <div style={{ display: 'grid', gap: 6 }}>
              {facilities.map(f => (
                <label key={f} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <input type="checkbox" checked={selectedFacilities.includes(f)} onChange={() => toggleFacility(f)} />
                  <span>{f}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>
        <section>
          {loading && <p>Loading hotels...</p>}
          {!loading && (
            <>
              <p style={{ color: '#666' }}>{hotelsData.total} hotels found</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
                {hotelsData.results.map(h => (
                  <Link key={h.id} to={`/hotel/${h.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ border: '1px solid #eee', borderRadius: 8, overflow: 'hidden' }}>
                      <div style={{ height: 160, background: `url(${h.images?.[0]}) center/cover no-repeat` }} />
                      <div style={{ padding: 12 }}>
                        <h3 style={{ margin: '0 0 4px' }}>{h.name}</h3>
                        <div style={{ color: '#666', marginBottom: 6 }}>{h.address}</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span>⭐ {h.rating}</span>
                          <span style={{ fontWeight: 700 }}>${h.pricePerNight} <span style={{ color: '#666', fontWeight: 400 }}>per night</span></span>
                        </div>
                        <div style={{ marginTop: 8, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                          {h.facilities.slice(0, 3).map(f => (
                            <span key={f} style={{ border: '1px solid #ddd', padding: '2px 8px', borderRadius: 999, fontSize: 12 }}>{f}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
}