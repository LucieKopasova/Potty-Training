import { useState } from 'react';

export const Settingsday = ({ handlestart, onChange, handleEnd }) => {
  return (
    <>
      <div className="btns__setting">
        <button
          className="btn__settings btn__settings--star"
          onClick={handlestart}
        >
          Start
        </button>

        <button
          className="btn__settings btn__settings --end"
          onClick={handleEnd}
        >
          Konec
        </button>
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
            onChange={onChange}
          />
          minut
        </label>
      </div>
    </>
  );
};
