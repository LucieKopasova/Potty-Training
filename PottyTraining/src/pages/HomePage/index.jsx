import './style.css';

export const HomePage = () => {
  return (
    <div className="container">
      <header className="header">
        <h1 className="header__title">Potty Traing</h1>
      </header>

      <section className="settings__day">
        <div className="btns__setting">
          <button class="btn__settings btn__settings--star">Start</button>

          <button class="btn__settings btn__settings --end">Konec</button>
        </div>
        <div className="settings__interval">
          <label>
            Každých:
            <input
              type="number"
              name="interval"
              className="interval__input"
              min="1"
              placeholder="30"
            />
            minut
          </label>
        </div>
      </section>

      <section className="daily-report">
        <ul className="daily-report__list">
          <li className="daily-report__item">
            <span className="time">07:30</span>
            <button clclassNameass="btn-success" aria-label="Úspěch">
              ✅
            </button>
            <button className="btn-failure" aria-label="Neúspěch">
              ❌
            </button>
          </li>
          <li className="daily-report__item">
            <span className="time">07:30</span>
            <button clclassNameass="btn-success" aria-label="Úspěch">
              ✅
            </button>
            <button className="btn-failure" aria-label="Neúspěch">
              ❌
            </button>
          </li>
          <li className="daily-report__item">
            <span className="time">07:30</span>
            <button clclassNameass="btn-success" aria-label="Úspěch">
              ✅
            </button>
            <button className="btn-failure" aria-label="Neúspěch">
              ❌
            </button>
          </li>
        </ul>
      </section>

      <section className="daily-graphs">
        <h3>Úspěšnost:</h3>
        <div>66%</div>
      </section>

      <footer>
        <p>Copyright © 2025 Lucie Kopasová</p>
      </footer>
    </div>
  );
};
