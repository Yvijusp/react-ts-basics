import { useState } from 'react';
import Button from './Button';

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const increment = (): void => setCount(count + 1);
  const decrement = (): void => setCount(count > 0 ? count - 1 : count);

  return (
    <div>
      <h3>Counter: {count}</h3>
      <Button text='-' action={decrement} />
      <Button text='+' action={increment} />
    </div>
  );
};

export default Counter;
