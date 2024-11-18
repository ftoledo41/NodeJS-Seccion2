const getAgePlugin = require("get-age");

const getAge = (birthdate) => {
  if (!birthdate) return new Error("birthdate is requered");
  
  return getAgePlugin(birthdate);
}

module.exports = {
  getAge
}