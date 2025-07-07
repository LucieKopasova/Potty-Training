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

  if (!startButton) {
    return (
      <>
        <div className="btns__setting ">
          <button
            className="btn__settings btn__setting--start"
            onClick={handleclick}
          >
            Start
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
  } else {
    return (
      <>
        <div className="btns__setting">
          <button
            className={'btn__settings btn__settings--accident'}
            onClick={handleclick}
          >
            Nehoda
          </button>

          <button
            className="btn__settings btn__settings--unplanned"
            onClick={handleclick}
          >
            Neplánovaně
          </button>

          <button
            className="btn__settings btn__setting--end"
            onClick={handleClickEnd}
          >
            Konec
          </button>
        </div>
      </>
    );
  }
};
