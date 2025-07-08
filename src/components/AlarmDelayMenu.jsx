import React from 'react';

export const AlarmDelayMenu = ({ closeMenu }) => {
  return (
    <div className="alarmDelayMenu-container">
      <div className="alarmDelayMenu-header">Odložit o:</div>
      <button
        className="alarmDelayMenu-btn" /* onClick={() => handlePostpone(5)} */
      >
        +5 min
      </button>
      <button
        className="alarmDelayMenu-btn" /* onClick={() => handlePostpone(10)} */
      >
        +10 min
      </button>
      <button
        className="alarmDelayMenu-btn" /* onClick={() => handlePostpone(15)} */
      >
        +15 min
      </button>
      <button className="alarmDelayMenu-btn close-menu" onClick={closeMenu}>
        X
      </button>
    </div>
  );
};
