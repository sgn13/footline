import React, { useEffect } from 'react';
import './style.css';

const Notification = ({ data, resetNotification }) => {
  const { name, message, level } = data;
  let timeout;
  useEffect(() => {
    timeout = setTimeout(resetNotification, 5000);
  }, []);
  return (
    <div id="toast">
      <div
        className={
          level === 'error'
            ? 'img badge badge-danger'
            : level === 'success'
            ? 'img badge badge-success'
            : 'img'
        }
      >
        <span
          className="close-button"
          onClick={() => {
            resetNotification();
            clearTimeout(timeout);
          }}
        >
          X
        </span>
        {/* <span>{name}</span> */}
      </div>
      <div id="desc">
        <span> {message}</span>
      </div>
    </div>
  );
};

export default Notification;
