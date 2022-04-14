import axios from 'axios';

const call = {};
const once = (config = {}, requestType = '') => {
  const newConfig = config;

  if (call[requestType]) {
    call[requestType].cancel('Only one request allowed at a time. Cancelling first.');
  }
  call[requestType] = axios.CancelToken.source();
  newConfig.cancelToken = call[requestType].token;

  return axios(newConfig);
};

async function doRequest(url, payload, method) {
  const destUrl = process.env.REACT_APP_BASE_URL;

  const config = {
    url: destUrl + url,
    method,
    headers: {
      locale: localStorage.getItem('locale') || 'en_GB',
      'content-type': 'application/json',
      'Access-Control-Allow-Methods': '*',
    },
    data: payload,
  };

  try {
    const response = await once(config, config.url);

    return response;
  } catch (error) {
    const { response } = error;

    return response;
  }
}

export async function get(url) {
  const response = await doRequest(url, {}, 'get');
  return response;
}

export async function put(url, payload) {
  const response = await doRequest(url, payload, 'put');
  return response;
}
