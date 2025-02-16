import React from 'react'
import { getLatestNotification } from "./utils.js";
import './Notifications.css';
import closeIcon from './close-icon.png'

export default function Notifications() {
  const onButtonClick = (e) => {
    console.log("Close button has been clicked")
  } 
  return (
    <div className="Notifications">
      <button style={{float: "right", width: "20px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center"}} aria-label="close" onClick={onButtonClick}>
        <img src={closeIcon} alt="Close notifications" style={{ width: "15px", height: "15px", margin: "auto"}} />
      </button>
      <p>Here is the list of otifications</p>
      <ul>
        <li data="default">New course available</li>
        <li data="urgent">New resume available</li>
        <li
          data="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  )
}
