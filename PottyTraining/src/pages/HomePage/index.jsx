import './style.css';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Settingsday } from '../../components/SettingsDay';
import { useState } from 'react';
import { DailyReport } from '../../components/dailyReport';

ChartJS.register(ArcElement);

export const HomePage = () => {
  const [startTime, setstartTime] = useState([]);

  const handleClick = () => {
    const now = new Date();
    const interval = 30;
    const count = 5;
    const newTimes = [];
    for (let i = 0; i < count; i++) {
      const newTime = new Date(now);
      newTime.setMinutes(newTime.getMinutes() + interval * i);

      newTimes.push({
        hours: newTime.getHours(),
        minutes: newTime.getMinutes(),
      });
    }

    setstartTime(newTimes);
  };

  const data = {
    labels: ['Úspěch', 'Neúspěch'],
    datasets: [
      {
        data: [66, 34],
        backgroundColor: ['#79ecfc', '#00bcd4'],
      },
    ],
  };

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
        <Settingsday onClick={handleClick} />
      </section>

      <section className="daily-report">
        <DailyReport times={startTime} />
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
