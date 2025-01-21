import React from 'react';
import useAuth from '../../Hooks/useAuth';

const UserProfile = () => {
    const {user}=useAuth()
    return (
        <div className='flex flex-col justify-center items-center p-5 md:p-16'>
            <img className='h-32 md:h-52' src={user.photoURL} alt="user Image" />
            <h2 className='text-3xl md:text-5xl font-bold mt-5 md:mt-10 '>{user.displayName}</h2>
            <p className='text-base md:text-2xl md:mt-2'>{user.email}</p>
        </div>
    );
};

export default UserProfile;