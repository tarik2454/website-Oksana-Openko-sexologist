import axios from 'axios';

const BASE_URL = 'https://goit-all-hw-react-backend.onrender.com';

export async function addContact(formData) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: formData,
  };

  const { data } = await axios.post(
    `${BASE_URL}/api/application`,
    formData,
    options
  );

  return data;
}

export async function getWakeUpServer() {
  await axios.get(`${BASE_URL}/api/application`);
}
