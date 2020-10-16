import axios from 'axios';

export const corrosionClient = axios.create({
  baseURL: process.env.REACT_APP_CLIENT_URL,
  headers: {'Content-Type': 'application/json'}
});