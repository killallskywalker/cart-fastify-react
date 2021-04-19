import React from 'react';

/* 
 props.imgSrc - image url 
 props.link - link to bring it to another url 
 props.name - title 
*/

const ProfileImage = (props) => {
    return ( 
        <div>
            <div className=" bg-gray-200 p-2 rounded">
                <img src={props.imgSrc} alt={props.imgSrc} className="w-auto h-32 bg-cover"/>
            </div>
            <div>
                <a href={props.link}>{props.name}</a>
            </div>
        </div>
    )
}

export default ProfileImage;
