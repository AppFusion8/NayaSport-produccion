import React from 'react';
import MessengerIcon from "../../../assets/icons8-facebook-messenger.svg";
import './Messenger.css';

function Messenger() {
  return (
    <span>
      <a target='_blank' className='messenger-icon-link' href="https://m.me/1312940038752456">
        <img alt="messenger-icon" src={MessengerIcon} />
      </a>
    </span>
  )
}

export default Messenger;