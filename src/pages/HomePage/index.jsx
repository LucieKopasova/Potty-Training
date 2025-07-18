import './style.css';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Settingsday } from '../../components/SettingsDay';
import { useState, useEffect } from 'react';
import { DailyReport } from '../../components/dailyReport';

ChartJS.register(ArcElement);

export const HomePage = () => {
  const [startTime, setStartTime] = useState([]);
  const [customerInterval, setCustomerInterval] = useState(30);
  const [showButton, setShowButton] = useState(true);

  const handleChange = (e) => {
    setCustomerInterval(Number(e.target.value));
  };

  const handlestart = () => {
    const now = new Date();
    const interval = customerInterval;
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

    setStartTime(newTimes);
    console.log(delay);
  };
  console.log(startTime);

  const handleAlarmDelayChange = (alarmDelayInterval) => {
    if (alarmDelayInterval >= 0) {
      const updatedTimes = startTime.map(({ hours, minutes }) => {
        const totalMinutes = hours * 60 + minutes + alarmDelayInterval;

        const newHours = Math.floor(totalMinutes / 60) % 24;
        const newMinutes = totalMinutes % 60;

        return { hours: newHours, minutes: newMinutes };
      });

      setStartTime(updatedTimes);
    }
  };

  const handleEnd = () => {
    setInterval(30);
    setStartTime([]);
  };

  useEffect(() => {
    if (startTime.length === 0) return;

    const interval = setInterval(() => {
      const now = new Date();
      const nowTimeInMinutes = now.getHours() * 60 + now.getMinutes();
      const firstAlarmInMinutes =
        startTime[0].hours * 60 + startTime[0].minutes;

      if (nowTimeInMinutes >= firstAlarmInMinutes) {
        handlestart();
      }

      if (nowTimeInMinutes === firstAlarmInMinutes - 2) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }, 30000);
    return () => clearInterval(interval);
  }, [startTime]);

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
        <Settingsday
          handlestart={handlestart}
          onChange={handleChange}
          handleEnd={handleEnd}
        />
      </section>

      <section className="daily-report">
        <DailyReport
          times={startTime}
          successButton={showButton}
          onAlarmDelayChange={handleAlarmDelayChange}
        />
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
