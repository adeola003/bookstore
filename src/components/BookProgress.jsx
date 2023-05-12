import React from 'react';

const BookProgress = () => {
  const randomPercentage = Math.floor(Math.random() * 100);
  const strokeWidth = 10;
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (randomPercentage / 100) * circumference;

  return (
    <div className="book-progress">
      <svg width="120" height="120">
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#e6e6e6"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#0078d4"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <p className="completion">
        {randomPercentage}
        %
        <br />
        <span className="Completed">Completed</span>
      </p>
    </div>
  );
};

export default BookProgress;
