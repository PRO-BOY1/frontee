import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h1>Welcome to your Dashboard</h1>
        {/* Add the dashboard content here */}
      </div>
    </div>
  );
};

export default Dashboard;
