import axios from "axios";

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000"
});
const useAxiosSecure = () => {
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token');
        console.log('token from interceptor: ', token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (err) {
        return Promise.reject(err);
    })
    return axiosSecure;
};

export default useAxiosSecure;