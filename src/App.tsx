import MathButton from './components/Buttons/MathButton';
import Counter from './components/Counter';
import { Operators } from './interfaces/interfaces';
// import Users from './components/Users';
// import Posts from './components/Posts';

const App = () => {
  const math = (
    num1: number,
    num2: number,
    operator: Operators
  ): number | null => {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '/':
        return num1 / num2;
      case '*':
        return num1 / num2;
      default:
        return null;
    }
  };

  return (
    <div>
      <Counter />
      {/* <Posts /> */}
      {/* <Users /> */}
      <br />
      <MathButton operator='+' numbers={[12, 6]} action={math} />
      <MathButton operator='-' numbers={[10, 6]} action={math} />
    </div>
  );
};

export default App;
