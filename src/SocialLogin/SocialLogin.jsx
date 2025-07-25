import { FaFacebookF, FaGooglePlusG } from 'react-icons/fa6';
import useAuth from '../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import useAxiosPublic from '../hooks/useAxiosPublic';

const SocialLogin = () => {
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const { googleLogin, facebookLogin } = useAuth();
    const handleFacebookLogin = () => {
        facebookLogin()
            .then(result => {
                const logUser = result.user;
                console.log(logUser)
                toast('Successfully login')
                //user add database
                const user = {
                    email: logUser.email,
                    name: logUser.displayName
                }
                axiosPublic.post('/users', user)
                    .then(res => {
                        console.log(res.data)
                    })
                navigate(from)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const handleGooleLogin = () => {
        googleLogin()
            .then(result => {
                const logUser = result.user;
                console.log(logUser)
                toast('Successfully login')
                //user add database
                const user = {
                    email: logUser.email,
                    name: logUser.displayName
                }
                axiosPublic.post('/users', user)
                    .then(res => {
                        console.log(res.data)
                    })
                navigate(from)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className='flex justify-center items-center mt-6'>
            <ToastContainer />
            <span onClick={handleFacebookLogin} style={{ backgroundColor: '#3b5998' }} className='rounded-full w-10 h-10 flex justify-center items-center mr-3 text-white cursor-pointer'>
                <FaFacebookF className='text-xl' />
            </span>
            <span onClick={handleGooleLogin} style={{ backgroundColor: '#d34836' }} className='rounded-full w-10 h-10 flex justify-center items-center mr-3 text-white cursor-pointer'>
                <FaGooglePlusG className='text-2xl' />
            </span>
        </div>
    );
};

export default SocialLogin;