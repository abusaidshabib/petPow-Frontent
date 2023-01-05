import React from 'react';
import useTitle from '../../hook/useTitle';

const Unavailable = () => {
    useTitle('404');
    return (
        <div className='text-center'>
            <p className='display-1 fw-bold py-5'>Page Not Found</p>
        </div>
    );
};

export default Unavailable;