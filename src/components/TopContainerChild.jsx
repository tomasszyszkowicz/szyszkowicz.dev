import React, { ReactNode } from 'react';
import '../css/topContainerChild.css';

const TopContainerChild = ({ children }) => {
    return (
        <div className="top-container-child">
            {children}
        </div>
    );
}

export default TopContainerChild;