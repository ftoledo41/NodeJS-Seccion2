
// console.log(process.env);

const { SHELL, USERPROFILE, npm_lifecycle_script } = process.env;
// console.log({SHELL, USERPROFILE, npm_lifecycle_script});

// console.table({ SHELL, USERPROFILE, npm_lifecycle_script });

const characters = ['Flash', 'Superman', 'Green Lantern','Batman'];
const [_, __,___, batman] = characters;

// console.log(batman);