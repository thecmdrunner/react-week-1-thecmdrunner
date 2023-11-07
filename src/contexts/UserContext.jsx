import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    id: '1234567890',
    username: 'thecmdrunner',
    name: 'Pranav ⚡',
    bio: '🧑🏻‍🚀 Creative Hacker · Learning by Building · Love Simplicity',
    email: '',
    password: '',
    month: 1,
    day: 1,
    year: 2002,
  });

  return (
    <UserContext.Provider value={{ formData, setFormData }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node,
};
