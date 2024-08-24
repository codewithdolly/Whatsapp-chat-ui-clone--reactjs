import React from "react";
import "./Footer.css";
import { FaPaperPlane, FaSmile } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <FaSmile className="emoji-icon" />
      <input
        type="text"
        placeholder="Type a message"
        className="message-input"
      />
      <FaPaperPlane className="send-icon" />
    </div>
  );
};

export default Footer;
