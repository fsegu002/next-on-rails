import fetch from 'isomorphic-unfetch';

const http = async (url, method, data) => {
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json();
};

export default http;
