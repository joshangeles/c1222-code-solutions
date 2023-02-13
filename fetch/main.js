fetch('https://pokeapi.co/api/v2/pokemon/134')
  .then((response) => response.json())
  .then((vaporeon) => console.log(vaporeon));
