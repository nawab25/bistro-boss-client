import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000"
});
const useAxiosSecure = () => {
    const {logOut} = useAuth();
    const navigate = useNavigate();

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token');
        console.log('token from interceptor: ', token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (err) {
        return Promise.reject(err);
    })

    //response interceptor
    axiosSecure.interceptors.response.use((config) => {
        return config;
    }, async(err) => {
        const status = err.response.status;
        console.log('error from interceptor: ', err);
        if(status === 401 || status === 403) {
            await logOut();
            navigate('/login');
        }
        return Promise.reject(err);
    })

    return axiosSecure;
};

export default useAxiosSecure;