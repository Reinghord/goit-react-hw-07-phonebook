import axios from 'axios';

axios.defaults.baseURL =
  'https://62f67ea5a3bce3eed7c28375.mockapi.io/contacts/';

export async function getContacts() {
  const response = await axios.get('/contacts');
  return response;
}

export async function postContacts(data) {
  const response = await axios.post('/contacts', data);
  return response.data;
}

export async function deleteContacts(id) {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
}
