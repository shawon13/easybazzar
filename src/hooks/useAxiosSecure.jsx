import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const axiosSecure = axios.create({
    baseURL: 'https://easybazzar-server.vercel.app',
    withCredentials: true,
});

const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.response.use(response => response,
            error => {
                if (error.status === 401 || error.status === 403) {
                    logOut()
                        .then(() => {
                            navigate('/login')
                        })
                    console.log(error)
                }
                return Promise.reject(error)
            }
        );
    }, [])

    return axiosSecure;
};

export default useAxiosSecure;