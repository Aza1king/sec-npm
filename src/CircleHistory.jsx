
import React from 'react';
import { Link } from 'react-router-dom';

const CircleHistory = ({ circles }) => {
  return (
    <div className="circle-history">
      <h2>Circle History</h2>
      {circles.map((circle, index) => (
        <div key={index} className="circle">
          {`Circle ${index + 1}: ${circle} ms`}
        </div>
      ))}
      <Link to="/">
        <button>Back to Stopwatch</button>
      </Link>
    </div>
  );
};

export default CircleHistory;
