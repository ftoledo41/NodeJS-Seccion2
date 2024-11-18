
const buildMakePerson = ({ getUUID, getAge }) => {

  return (buildPerson = ({ name, birthdate }) => {
    return {
      id: getUUID(),
      name: name,
      birthdate: birthdate,
      age: getAge(birthdate),
    };
  });
};

module.exports = {
  buildMakePerson,
};
