import axios from 'axios';


const axiosInstance = axios.create({baseURL: import.meta.env.VITE_APP_SERVER });


axiosInstance.interceptors.response.use(
  response => {
    return response
  },

  error => {
    console.log(error)
    Promise.reject((error.response && error.response.data) || 'Something went wrong')
  }


);

export default axiosInstance;
