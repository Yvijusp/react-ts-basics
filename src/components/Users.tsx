import { useEffect, useState } from 'react';
import axios from 'axios';
import User from './User';
import { IUser } from '../interfaces/interfaces';

const Users = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );

        setUsers(data);
        setLoading(false);
      } catch (error) {}
    };
    fetchUsers();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

export default Users;
