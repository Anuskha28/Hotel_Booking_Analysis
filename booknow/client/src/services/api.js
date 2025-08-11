import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';
export const api = axios.create({ baseURL });

export const fetchCities = () => api.get('/cities').then(r => r.data);
export const fetchFacilities = () => api.get('/facilities').then(r => r.data);
export const fetchHotels = (params = {}) => api.get('/hotels', { params }).then(r => r.data);
export const fetchHotelById = (id) => api.get(`/hotels/${id}`).then(r => r.data);