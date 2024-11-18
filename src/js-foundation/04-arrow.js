const users = [
  {
    id: 1,
    name: "Jhon Doe",
  },
  {
    id: 2,
    name: "Francisco Toledo",
  },
];

const getUserById = (id, callback) => {
  // Larga
  // const user = users.find((user) => {
  //   return user.id === id;
  // });

  // Corta
  const user = users.find((user) => user.id === id);

  // Corta ternario no es necesario el IF
  // (user) ? callback(null, user) : callback(`User not found with id ${id}`);

  if (!user) return callback(`User not found with id ${id}`);

  return callback(null, user);
};

module.exports = {
  getUserById,
};

// getUserById(1);
