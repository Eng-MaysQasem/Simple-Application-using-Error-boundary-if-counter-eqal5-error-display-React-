import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  if (count === 5) {
    throw new Error('Error here');
  }

  return (
    <div>
      <p>number {count}</p>
      <button onClick={() => setCount(count + 1)}>increse</button>
      <button onClick={() => setCount(count - 1)}>decrese</button>
    </div>
  );
};

export default Counter;
