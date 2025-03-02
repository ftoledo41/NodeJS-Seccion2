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

function getUserById(id, callback) {
  // return user.find(user => user.id == id);
  const user = users.find(function (user) {
    return user.id === id;
  });
  if (!user) {
    return callback(`User not found with id ${id}`);
  }

  return callback(null, user);
}

module.exports = {
  getUserById,
};

// getUserById(1);
