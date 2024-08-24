import React from 'react';
import './Header.css';
import { FaEllipsisV, FaPhoneAlt, FaVideo } from 'react-icons/fa';

const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                {/* <img src="/Images/user.jpeg" alt="avatar" className="avatar" width={40} height={40}/> */}
                <img src="/Images/user2.png" alt="avatar" className="avatar" width={40} height={40}/>
                <div className="user-info">
                    <h4>Mr. Wilson</h4>
                    <p className="status">online</p>
                </div>
            </div>
            <div className="header-right">
            <FaPhoneAlt className="header-icon" />
                <FaVideo className="header-icon" />
                <FaEllipsisV className="header-icon settings" />
            </div>
        </div>
    );
}

export default Header;
