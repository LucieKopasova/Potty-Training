import React from 'react';

export const Settingsday = ({}) => {
  return (
    <>
      <div className="btns__setting">
        <button className="btn__settings btn__settings--star">Start</button>

        <button className="btn__settings btn__settings --end">Konec</button>
      </div>
      <div className="settings__interval">
        <label>
          Každých:
          <input
            type="number"
            name="interval"
            className="interval__input"
            min="5"
            max="90"
            step="5"
            placeholder="30"
          />
          minut
        </label>
      </div>
    </>
  );
};
