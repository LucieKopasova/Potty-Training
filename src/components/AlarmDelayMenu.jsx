import { useState } from 'react';

export const AlarmDelayMenu = ({ closeMenu, onAlarmDelayChange }) => {
  const [alarmDelay, setAlarmDelay] = useState(0);

  const handlePostpone = (number) => {
    setAlarmDelay((prev) => (prev === number ? 0 : number));
  };

  return (
    <div className="alarmDelayMenu-container">
      <div className="alarmDelayMenu-header">Odložit o:</div>
      <button
        className={`alarmDelayMenu-btn ${
          alarmDelay === 5 ? 'alarmDelayMenu-btn--active' : ''
        }`}
        onClick={() => handlePostpone(5)}
      >
        +5 min
      </button>
      <button
        className={`alarmDelayMenu-btn ${
          alarmDelay === 10 ? 'alarmDelayMenu-btn--active' : ''
        }`}
        onClick={() => handlePostpone(10)}
      >
        +10 min
      </button>
      <button
        className={`alarmDelayMenu-btn ${
          alarmDelay === 15 ? 'alarmDelayMenu-btn--active' : ''
        }`}
        onClick={() => handlePostpone(15)}
      >
        +15 min
      </button>
      <button
        className="alarmDelayMenu-btn close-menu"
        onClick={() => {
          onAlarmDelayChange(alarmDelay);
          closeMenu();
        }}
      >
        X
      </button>
    </div>
  );
};
