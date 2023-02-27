import axios from 'axios';
axios.defaults.baseURL = 'https://63fcab82677c4158731110c0.mockapi.io'


export const requestContacts = async () => {
  const { data } = await axios.get(`/contacts`);

  return data;
};

export const postContact = async (contact) => {
  const { data } = await axios.post(`/contacts`, contact);

  return data;
};

export const deleteContactById = async (id) => {
  const { data } = await axios.delete(`/contacts/${id}`);

  return data;
};