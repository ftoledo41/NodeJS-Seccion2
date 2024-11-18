const { getUUID, getAge } = require("./plugins/index");

const getPokemonById = require("./js-foundation/06-promises");

getPokemonById(4)
  .then((pokemon) => console.log({ pokemon }))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finalmente"));


//token de acceso
//publicas