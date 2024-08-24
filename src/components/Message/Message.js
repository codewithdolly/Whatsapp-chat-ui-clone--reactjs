import React from 'react';
import './Message.css';

const Message = ({ text, time, isSent }) => {
    return (
       <div>
        {isSent?<div >&nbsp;</div>:null}
        
         <div className={`message ${isSent ? 'sent' : 'received'}`}>
            <p>{text}</p>
            <span className="time">{time}</span>
        </div>
       </div>
    );
}

export default Message;
