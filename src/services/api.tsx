const axios = require('axios');

async function Api(props:any) {
  const {
    data,
    module = '',
    method,
    version = process.env.API_VERSION,
    base_url = process.env.API_BASE,
    headers = {},
  } = props;

  const request_config = {
    method: method.toLowerCase(),
    url: `${version}${module}`,
    data,
    baseURL: base_url,
    headers: {
      ...headers,
      ...axios.headers,
    },
  };

  try {
    const response = await axios(request_config);
    return response?.data;
  } catch (error:any) {
    console.error('[NETWORK]', error);
    const requestError:any = new Error(error);
    requestError.response = error?.response;
    throw requestError;
  }
}

export default Api;