import { v4 as uuidv4 } from "uuid";

let users = [];

//get all users

export const getUsers = (req, res) => {
  res.send(users);
};

// add a new user
export const addUser = (req, res) => {
  const user = req.body;

  const userID = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

  users.push({ ...user, id: userID });
  res.send(`User with name ${user.firstname} is added to database`);
};

// get a single user by id

export const searchUserById = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id == id);
  res.send(foundUser);
};

// delete a specific user

export const delUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id != id);

  res.send(`User with the id: ${id} has been deleted`);
};

// edit the user data

export const editUser = (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, age } = req.body;
  const user = users.find((user) => user.id == id);

  if (firstname) {
    user.firstname = firstname;
  }
  if (lastname) {
    user.lastname = lastname;
  }
  if (age) {
    user.age = age;
  }
  res.send(`User with the id: ${id} has been updated`);
};
