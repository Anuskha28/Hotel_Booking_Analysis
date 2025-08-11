import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchHotelById } from '../services/api';

export default function HotelDetailPage() {
  const { hotelId } = useParams();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchHotelById(hotelId)
      .then(setHotel)
      .finally(() => setLoading(false));
  }, [hotelId]);

  if (loading || !hotel) return <p>Loading...</p>;

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 12 }}>
          <div style={{ height: 360, background: `url(${hotel.images?.[0]}) center/cover no-repeat`, borderRadius: 8 }} />
          <div style={{ display: 'grid', gap: 12 }}>
            {hotel.images?.slice(1, 3).map((img, idx) => (
              <div key={idx} style={{ height: 174, background: `url(${img}) center/cover no-repeat`, borderRadius: 8 }} />
            ))}
          </div>
        </div>
        <div>
          <h2 style={{ margin: '8px 0' }}>{hotel.name}</h2>
          <div style={{ color: '#666' }}>{hotel.address}</div>
          <div style={{ marginTop: 8 }}>⭐ {hotel.rating}</div>
          <p style={{ marginTop: 12 }}>{hotel.description}</p>

          <div style={{ marginTop: 16 }}>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>Facilities</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {hotel.facilities.map(f => (
                <span key={f} style={{ border: '1px solid #ddd', padding: '4px 10px', borderRadius: 999 }}>{f}</span>
              ))}
            </div>
          </div>

          {hotel.city && (
            <div style={{ marginTop: 16, paddingTop: 12, borderTop: '1px solid #eee' }}>
              <div style={{ color: '#666' }}>City</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 8 }}>
                <div style={{ width: 64, height: 48, background: `url(${hotel.city.image}) center/cover no-repeat`, borderRadius: 6 }} />
                <div>
                  <div style={{ fontWeight: 600 }}>{hotel.city.name}</div>
                  <div style={{ color: '#666' }}>{hotel.city.country}</div>
                </div>
                <div style={{ marginLeft: 'auto' }}>
                  <Link to={`/city/${hotel.city.id}`}>See all hotels in {hotel.city.name}</Link>
                </div>
              </div>
            </div>
          )}

          <div style={{ marginTop: 24, padding: 16, border: '1px solid #eee', borderRadius: 8 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ color: '#666' }}>Price</div>
                <div style={{ fontSize: 24, fontWeight: 700 }}>${hotel.pricePerNight} <span style={{ fontSize: 14, color: '#666', fontWeight: 400 }}>per night</span></div>
              </div>
              <button style={{ background: '#0ea5e9', border: 'none', color: 'white', padding: '10px 16px', borderRadius: 6, cursor: 'pointer' }}>Book now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}