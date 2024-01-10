import axios from 'axios';

const API_KEY = '65994065a20d3dc41cef73e9';
const END_POINT = 'contacts';
axios.defaults.baseURL = `https://${API_KEY}.mockapi.io`;

export const getContacts = async () => {
  const { data } = await axios.get(`/${END_POINT}`);

  return data;
};

export const addContact = async contact => {
  const { data } = await axios.post(`/${END_POINT}`, contact);

  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`/${END_POINT}/${id}`);

  return data;
};
