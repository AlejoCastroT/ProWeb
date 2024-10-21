import React, { useState, useEffect } from 'react';
import '../Styles/UserPage.css';



const UserPage = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    bio: '',
    profilePicture: '',
  });

  
  useEffect(() => {
    const fetchUserData = async () => {
      
      const userData = {
        name: 'Camilo Andrés',
        email: 'camilo@example.com',
        bio: 'Full Stack Developer passionate about React.',
        profilePicture: 'https://via.placeholder.com/150',
      };
      setUser(userData);
    };

    fetchUserData();
  }, []);

  return (
    <div className="user-page">
      <h1>{user.name}</h1>
      <img src={user.profilePicture} alt="Profile" />
      <p>Email: {user.email}</p>
      <p>{user.bio}</p>
    </div>
  );
};

export default UserPage;
