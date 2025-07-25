import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2'>
            <div id="error-page" className='text-center'>
                <h1>Oops!</h1>
                <p className='my-2'>Sorry, an unexpected error has occurred.</p>
                <p className='mb-5'>
                    <i>{error.statusText || error.message}</i>
                </p>
                <Link to='/' style={{ color: '#fff' }} className='bg-black py-3 px-4 rounded'>Back to Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;