import { Operators } from '../../interfaces/interfaces';

interface IProps {
  operator: Operators;
  action: (num1: number, num2: number, operator: Operators) => number | null;
  numbers: [number, number];
}

const MathButton = ({ operator, action, numbers }: IProps) => {
  return (
    <button
      onClick={(e: React.MouseEvent<HTMLElement>) => {
        const target = e.target as HTMLElement;
        return (target.innerText = `Answer ${action(
          numbers[0],
          numbers[1],
          operator
        )}`);
      }}
    >
      Show {numbers[0]} {operator} {numbers[1]} answer
    </button>
  );
};

export default MathButton;
