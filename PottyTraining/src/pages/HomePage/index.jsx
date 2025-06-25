import './style.css';

export const HomePage = () => {
  return (
    <div className="container">
      <header className="header">
        <h1 className="header__title">Potty Traing</h1>
      </header>
      <section className="settings__day">
        <form className="settings__form">
          <div className="settings__row">
            <h4>Nastavení</h4>
            <label>
              Od:
              <input
                type="time"
                name="start-time"
                className="settings__input"
              />
            </label>
            <label>
              Do:
              <input type="time" name="end-time" className="settings__input" />
            </label>
          </div>

          <div className="settings__row">
            <h4>Polední spinkaní</h4>
            <label>
              Od:
              <input
                type="time"
                name="start-time"
                className="settings__input"
              />
            </label>
            <label>
              Do:
              <input type="time" name="end-time" className="settings__input" />
            </label>
          </div>
          <label>
            Každých:
            <input
              type="number"
              name="interval"
              className="settings__input"
              min="1"
            />{' '}
            minut
          </label>

          <button type="submit" class="settings__button">
            Vytvořit den
          </button>
        </form>
      </section>

      <section className="daily-report">
        <h3 className="daily-report__title">Den 22. června 2025</h3>
        <ul className="daily-report__list">
          <li className="daily-report__item">
            <span className="time">07:30</span>
            <button clclassNameass="btn success" aria-label="Úspěch">
              ✅
            </button>
            <button className="btn failure" aria-label="Neúspěch">
              ❌
            </button>
          </li>
        </ul>
      </section>

      <section className="daily-graphs">
        <h3>Dnešní úspěšnost:</h3>
        <div>66%</div>
      </section>

      <footer>
        <p>Copyright © 2025 Lucie Kopasová</p>
      </footer>
    </div>
  );
};
