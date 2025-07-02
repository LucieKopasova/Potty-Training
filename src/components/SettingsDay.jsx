import { useState } from 'react';

export const Settingsday = ({ handlestart, onChange, handleEnd }) => {
  const [startButton, setStartButton] = useState(false);

  const handleSwitch = () => {
    if (!startButton) {
      setStartButton(true);
    }
  };

  const handleclick = () => {
    handleSwitch();
    handlestart();
  };

  const handleClickEnd = () => {
    handleEnd();
    setStartButton(false);
  };

  return (
    <>
      <div className="btns__setting">
        <button
          className={
            startButton
              ? 'btn__settings btn__settings--accident'
              : 'btn__settings'
          }
          onClick={handleclick}
        >
          {startButton ? 'Nehoda' : 'Start'}
        </button>

        <button
          className="btn__settings btn__settings --end"
          onClick={handleClickEnd}
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
