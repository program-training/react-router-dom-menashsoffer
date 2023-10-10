import UserInterface from "../Data/UserInterface";
import UsersDB from "../Data/UsersDB";

const Users = () => {
  const users = UsersDB() as UserInterface[];

  return (
    <>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Users;
