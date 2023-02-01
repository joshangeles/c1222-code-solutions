const takeAChance = require('./take-a-chance');

const chance = takeAChance('Josh');

chance
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err.message);
  });
