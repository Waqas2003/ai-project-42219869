import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4">
      <Link to="/" className="text-lg font-bold text-gray-800">
        Travel Management System
      </Link>
      <ul className="flex justify-end">
        <li>
          <Link to="/login" className="text-gray-600 hover:text-gray-900">
            Login
          </Link>
        </li>
        <li>
          <Link to="/register" className="text-gray-600 hover:text-gray-900">
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;