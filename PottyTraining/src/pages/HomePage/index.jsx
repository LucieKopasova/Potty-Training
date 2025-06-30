import './style.css';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement);

export const HomePage = () => {
  const data = {
    labels: ['Úspěch', 'Neúspěch'],
    datasets: [
      {
        data: [66, 34],
        backgroundColor: ['#79ecfc', '#00bcd4'],
      },
    ],
  };

  // Volby grafu, bez legendy a tooltipů (jak jsi chtěla)
  const options = {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    cutout: '30%',
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="header__title">Potty Traing</h1>
      </header>

      <section className="settings__day">
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
            <div className="list__bullet"></div>
            <span className="time">07:30</span>
            <button
              className="btn__daily-report btn-success"
              aria-label="Úspěch"
            >
              <svg
                className="img__success"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="64"
                height="64"
                viewBox="0 0 64 64"
              >
                <path d="M32,6C17.641,6,6,17.641,6,32c0,14.359,11.641,26,26,26s26-11.641,26-26C58,17.641,46.359,6,32,6z M29.081,42.748	l-10.409-9.253l2.657-2.99l7.591,6.747L44,21l3.414,3.414L29.081,42.748z"></path>
              </svg>
            </button>
            <button
              className="btn__daily-report btn-failure"
              aria-label="Neúspěch"
            >
              <svg
                className="img__failure"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="64"
                height="64"
                viewBox="0 0 64 64"
              >
                <path d="M50.385,50.385c-10.153,10.153-26.616,10.153-36.77,0s-10.153-26.616,0-36.77s26.616-10.153,36.77,0	S60.538,40.231,50.385,50.385z M43.314,40.485L36.243,32l7.071-8.485l-2.828-2.828L32,27.757l-8.485-7.071l-2.828,2.828L27.757,32	l-7.071,8.485l2.828,2.828L32,36.243l8.485,7.071L43.314,40.485z"></path>
              </svg>
            </button>
          </li>
          <li className="daily-report__item">
            <div className="list__bullet"></div>
            <span className="time">07:30</span>
            <button
              className="btn__daily-report btn-success"
              aria-label="Úspěch"
            >
              <svg
                className="img__success"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="64"
                height="64"
                viewBox="0 0 64 64"
              >
                <path d="M32,6C17.641,6,6,17.641,6,32c0,14.359,11.641,26,26,26s26-11.641,26-26C58,17.641,46.359,6,32,6z M29.081,42.748	l-10.409-9.253l2.657-2.99l7.591,6.747L44,21l3.414,3.414L29.081,42.748z"></path>
              </svg>
            </button>
            <button
              className="btn__daily-report  btn-failure"
              aria-label="Neúspěch"
            >
              <svg
                className="img__failure"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="64"
                height="64"
                viewBox="0 0 64 64"
              >
                <path d="M50.385,50.385c-10.153,10.153-26.616,10.153-36.77,0s-10.153-26.616,0-36.77s26.616-10.153,36.77,0	S60.538,40.231,50.385,50.385z M43.314,40.485L36.243,32l7.071-8.485l-2.828-2.828L32,27.757l-8.485-7.071l-2.828,2.828L27.757,32	l-7.071,8.485l2.828,2.828L32,36.243l8.485,7.071L43.314,40.485z"></path>
              </svg>
            </button>
          </li>
          <li className="daily-report__item">
            <div className="list__bullet"></div>
            <span className="time">07:30</span>
            <button
              className="btn__daily-report btn-success"
              aria-label="Úspěch"
            >
              <svg
                className="img__success"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="64"
                height="64"
                viewBox="0 0 64 64"
              >
                <path d="M32,6C17.641,6,6,17.641,6,32c0,14.359,11.641,26,26,26s26-11.641,26-26C58,17.641,46.359,6,32,6z M29.081,42.748	l-10.409-9.253l2.657-2.99l7.591,6.747L44,21l3.414,3.414L29.081,42.748z"></path>
              </svg>
            </button>
            <button
              className="btn__daily-report btn-failure"
              aria-label="Neúspěch"
            >
              <svg
                className="img__failure"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="64"
                height="64"
                viewBox="0 0 64 64"
              >
                <path d="M50.385,50.385c-10.153,10.153-26.616,10.153-36.77,0s-10.153-26.616,0-36.77s26.616-10.153,36.77,0	S60.538,40.231,50.385,50.385z M43.314,40.485L36.243,32l7.071-8.485l-2.828-2.828L32,27.757l-8.485-7.071l-2.828,2.828L27.757,32	l-7.071,8.485l2.828,2.828L32,36.243l8.485,7.071L43.314,40.485z"></path>
              </svg>
            </button>
          </li>
        </ul>
      </section>

      <section className="daily-graphs">
        <h3 className="daily-graphs__title">Úspěšnost:</h3>
        <div className="graphs">
          <Doughnut data={data} options={options} />
        </div>
      </section>

      <footer>
        <p>Copyright © 2025 Lucie Kopasová</p>
      </footer>
    </div>
  );
};
