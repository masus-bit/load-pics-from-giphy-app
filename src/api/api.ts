  
import axios from "axios";
const TIMEOUT = 5000;

const createApi = (dispatch?:any) => {
  const api = axios.create({
    baseURL: `https://api.giphy.com/v1/gifs/random?api_key=efuIs9L37bHPoQf31dIzROMjOx7qm4GW&tag=`,
    timeout: TIMEOUT,
    withCredentials: false,
  });

  const onSuccess = (response?:any) => response;
  const onFail = (err?:any) => {

    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createApi;