import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import '../../Styles/Dashboard.css'

function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="flex items-center justify-center h-16">
          <img src={Logo} alt="Logo" className="h-8" />
        </div>
        <nav className="mt-10">
          <ul>
            <li className="hover:bg-gray-200">
              <Link to="/dashboard" className="block py-2 px-4 text-gray-800">Home</Link>
            </li>
            <li className="hover:bg-gray-200">
              <Link to="/profile" className="block py-2 px-4 text-gray-800">Profile</Link>
            </li>
            <li className="hover:bg-gray-200">
              <Link to="/settings" className="block py-2 px-4 text-gray-800">Settings</Link>
            </li>
            <li className="hover:bg-gray-200">
              <Link to="/logout" className="block py-2 px-4 text-gray-800">Logout</Link>
            </li>
          </ul>
        </nav>
      </aside>

      </div>
  );
}

export default Dashboard;
