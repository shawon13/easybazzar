import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div id="error-page" className='w-full text-center top-2/4 absolute'>
            <h1>Oops!</h1>
            <p className='my-2'>Sorry, an unexpected error has occurred.</p>
            <p className='mb-5'>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to='/' className='bg-black text-white py-3 px-4 rounded'>Back to Home</Link>
        </div>
    );
};

export default ErrorPage;