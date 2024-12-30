import React, { useState } from 'react';

const ConditionalCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Conditional Counter</h1>
      <p>Count: {count}</p>
      {count < 5 ? (
        <button onClick={() => setCount(count + 1)}>Increment</button>
      ) : (
        <p>Limit reached</p>
      )}
    </div>
  );
};

export default ConditionalCounter;
