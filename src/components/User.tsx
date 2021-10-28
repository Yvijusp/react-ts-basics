import { IUser } from '../interfaces/interfaces';

interface IProps {
  user: IUser;
}

const User = ({ user }: IProps) => {
  const { name, address } = user;
  return (
    <ul id={'' + user.id}>
      <li>{name}</li>
      <li>
        {address.street} {address.city}
      </li>
    </ul>
  );
};

export default User;
