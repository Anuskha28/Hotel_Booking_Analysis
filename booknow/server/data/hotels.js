export const cities = [
  { id: 1, name: 'New York', country: 'USA', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=60' },
  { id: 2, name: 'Paris', country: 'France', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=60' },
  { id: 3, name: 'Tokyo', country: 'Japan', image: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=1200&q=60' },
  { id: 4, name: 'Dubai', country: 'UAE', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=60' }
];

export const facilities = [
  'Free WiFi',
  'Breakfast Included',
  'Swimming Pool',
  'Gym',
  'Spa',
  'Airport Shuttle',
  'Pet Friendly',
  'Parking'
];

export const hotels = [
  {
    id: 101,
    cityId: 1,
    name: 'Central Park Hotel',
    address: '123 Manhattan Ave, New York',
    pricePerNight: 220,
    rating: 4.5,
    facilities: ['Free WiFi', 'Gym', 'Breakfast Included', 'Parking'],
    images: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=60',
      'https://images.unsplash.com/photo-1551776235-dde6d4829808?w=1200&q=60'
    ],
    description: 'Steps away from Central Park with modern rooms and city views.'
  },
  {
    id: 102,
    cityId: 1,
    name: 'Brooklyn Bridge Inn',
    address: '45 Bridge St, Brooklyn, New York',
    pricePerNight: 160,
    rating: 4.1,
    facilities: ['Free WiFi', 'Breakfast Included', 'Pet Friendly'],
    images: [
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200&q=60'
    ],
    description: 'Cozy boutique hotel near iconic Brooklyn sights.'
  },
  {
    id: 201,
    cityId: 2,
    name: 'Eiffel View Suites',
    address: '12 Rue de Paris, 7th Arr., Paris',
    pricePerNight: 300,
    rating: 4.7,
    facilities: ['Free WiFi', 'Breakfast Included', 'Spa', 'Gym'],
    images: [
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=60'
    ],
    description: 'Elegant suites with a direct view of the Eiffel Tower.'
  },
  {
    id: 202,
    cityId: 2,
    name: 'Montmartre Boutique',
    address: '8 Rue Lepic, Paris',
    pricePerNight: 140,
    rating: 4.0,
    facilities: ['Free WiFi', 'Pet Friendly'],
    images: [
      'https://images.unsplash.com/photo-1505691723518-36a5ac3b2bbc?w=1200&q=60'
    ],
    description: 'Charming artistic vibe in the heart of Montmartre.'
  },
  {
    id: 301,
    cityId: 3,
    name: 'Shinjuku Grand',
    address: '1-1 Nishi-Shinjuku, Tokyo',
    pricePerNight: 180,
    rating: 4.3,
    facilities: ['Free WiFi', 'Gym', 'Airport Shuttle', 'Breakfast Included'],
    images: [
      'https://images.unsplash.com/photo-1501117716987-c8e2aeea1f55?w=1200&q=60'
    ],
    description: 'Skyscraper hotel with panoramic Tokyo skyline views.'
  },
  {
    id: 302,
    cityId: 3,
    name: 'Asakusa Ryokan',
    address: '2-5-9 Asakusa, Taito, Tokyo',
    pricePerNight: 120,
    rating: 4.2,
    facilities: ['Free WiFi', 'Breakfast Included', 'Spa'],
    images: [
      'https://images.unsplash.com/photo-1544551763-7ef420be2a07?w=1200&q=60'
    ],
    description: 'Traditional-style stay near Senso-ji temple.'
  },
  {
    id: 401,
    cityId: 4,
    name: 'Marina Deluxe',
    address: 'Dubai Marina, Dubai',
    pricePerNight: 260,
    rating: 4.6,
    facilities: ['Free WiFi', 'Swimming Pool', 'Spa', 'Gym', 'Parking'],
    images: [
      'https://images.unsplash.com/photo-1551776235-9a08e2374b8a?w=1200&q=60'
    ],
    description: 'Luxury waterfront property with private beach access.'
  },
  {
    id: 402,
    cityId: 4,
    name: 'Desert Oasis Hotel',
    address: 'Al Qudra, Dubai',
    pricePerNight: 130,
    rating: 3.9,
    facilities: ['Free WiFi', 'Swimming Pool', 'Parking'],
    images: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=60'
    ],
    description: 'Relaxing stay near the dunes with stunning sunsets.'
  }
];