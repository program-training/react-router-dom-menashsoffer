import axios from "axios";
import { useState, useEffect } from "react";
import UserInterface from "./UserInterface";
const baseURL = "https://jsonplaceholder.typicode.com/users";

const UsersDB = (): UserInterface[] | JSX.Element => {
  const [users, setUsers] = useState<UserInterface[]>([]);

  useEffect(() => {
    axios
      .get<UserInterface[]>(baseURL)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }, []);
  if (!users) return <p>No users in array</p>;

  return users;
};

export default UsersDB;
