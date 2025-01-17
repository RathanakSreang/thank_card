import axios from "axios";
import { getAccessToken, getSessionUUID } from '../store/tokenStore';

export function defaultHeader() {
  const token = getAccessToken();
  const uuid = getSessionUUID();
  if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = 'https://api.co19kh.info';
  } else {
    axios.defaults.baseURL = 'http://localhost:3000';
  }
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  axios.defaults.headers.common['Accept'] = 'application/json';
  axios.defaults.headers.common['UUID'] = uuid;
  if (token !== null) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  }
}
