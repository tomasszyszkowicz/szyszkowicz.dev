import React, { ReactNode } from 'react';
import '../css/bottomContainer.css';

const BottomContainerChild = ({ children }) => {
    return (
        <div className="bottom-container-child">
            {children}
        </div>
    );
}

export default BottomContainerChild;