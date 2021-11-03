import React from 'react';

const Greeting = () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const hour = today.getHours();

  if (day === 16 && month === 7) {
    return (
      <h2>Happy Birthday Ale</h2>
    );
  } if (day === 30 && month === 11) { // Ryans Birthday
    return (
      <h2>Happy Birthday Ryan</h2>
    );
  }
  if (hour < 12 && hour > 6) {
    return (
      <h2>Good Morning</h2>
    );
  } if (hour < 18 && hour > 12) {
    return (
      <h2>Good Afternoon</h2>
    );
  }
  return (
    <h2>Good Evening</h2>
  );
};

export default Greeting;
