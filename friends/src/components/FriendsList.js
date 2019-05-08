import React from 'react';

const FriendsList = ({ friends }) => {
    return(
        <div>
            <h1>Friends List</h1>
            {friends.map(friend => {
                return (
                    <div>
                        <h2>Name: {friend.name}</h2>
                        <h3>Age: {friend.age}</h3>
                        <h3>Email: {friend.email}</h3>
                    </div>
                )
            })}
        </div>
    );
};

export default FriendsList;