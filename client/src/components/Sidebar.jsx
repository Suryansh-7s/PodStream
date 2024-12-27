import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>PodStream</h2>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#explore">Explore</a></li>
                <li><a href="#subscriptions">Subscriptions</a></li>
                <li><a href="#library">Library</a></li>
                <li><a href="#history">History</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;