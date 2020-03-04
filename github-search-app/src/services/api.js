import axios from 'axios';

const api = axios.create({ baseURL: 'https://api.github.com/users' });

export async function searchDevs(){
  let inputElement = document.getElementById('txtBusca');

  let response = await api.get(`/${inputElement.value}`);
  
  return response.data;
}

export default api;