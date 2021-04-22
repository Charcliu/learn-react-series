import React, { useState, useEffect } from 'react';

export default function ErrorTest() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (count === 5) {
      throw new Error('Test Error Boundary');
    }
  }, [count]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>click</button>
    </>
  );
}
