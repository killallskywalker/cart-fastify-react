import React, { useContext } from 'react';
import ProfileImage from './../components/ProfileImage';
import { UserContext } from './../context/UserContext';

const Welcome = () => {

    const { users } = useContext(UserContext);

    return (
        <div className="bg-gray-900 h-full py-12 sm:h-screen relative sm:py-40">
            <div className="absolute top-0 bg-gradient-to-b from-black via-bkack to-gray-900 w-full p-6">
            </div>
            <div className="flex justify-center">
                <h1 className="text-white text-lg font-bold sm:text-white sm:text-6xl sm:font-bold sm:my-10">Who you want to be?</h1>
            </div>
            <div className="flex space-x-0 flex-col sm:flex-row sm:space-x-2 justify-center">
                {users.map(user => 
                    <div className="flex justify-center items-center">
                        <div className="text-white text-center text-sm py-4 sm:w-full sm:text-white sm:text-center">
                            <ProfileImage imgSrc={`${process.env.REACT_APP_PUBLIC_URL}/assets/icons/profiles/${user.image}`} link={`carts/${user.id}`} name={user.name} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Welcome;
