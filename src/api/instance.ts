import axios from "axios"

const instance = axios.create(
  {
    baseURL: "https://angular-server.vercel.app/api"
  }
);
instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (err) {
    return Promise.reject(err)
  }
)
export default instance