interface IProps {
  text: string;
  action?: () => void;
}

const Button = ({ text, action }: IProps) => {
  return <button onClick={action}>{text}</button>;
};

export default Button;
