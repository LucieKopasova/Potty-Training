export const DailyReport = ({ times }) => {
  console.log(times);

  function formatTime(number) {
    return number < 10 ? '0' + number : number;
  }

  if (times.length === 0) {
    return (
      <div>
        <p className="empty__message">Zatím nemáte nic naplánováno. </p>
      </div>
    );
  }

  return (
    <>
      <ul className="daily-report__list">
        {times.map((time, index) => (
          <li key={index} className="daily-report__item">
            <div className="list__bullet"></div>
            <span className="time">
              {formatTime(time.hours)}:{formatTime(time.minutes)}
            </span>
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
                width="64"
                height="64"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="14" fill="#cccccc" />

                <circle
                  cx="16"
                  cy="16"
                  r="8"
                  fill="none"
                  stroke="white"
                  stroke-width="2"
                />

                <line
                  x1="16"
                  y1="16"
                  x2="16"
                  y2="11"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <line
                  x1="16"
                  y1="16"
                  x2="20"
                  y2="16"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />

                <circle cx="16" cy="16" r="1" fill="white" />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
