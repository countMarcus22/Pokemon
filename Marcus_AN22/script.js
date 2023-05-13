const trainer = {
  name: "Wealth",
  age: 100,
  pokemon: [],
  friends: {
   express : ["Hemiko","Damn Hen", "Mar Suven" , "Stellel" ],
   acquaintances: ["Ash", "Aunt May", "Twilight"],
  },
  talk: function() {
    console.log("Seelie! It is your turn to attack!");
  },
};

function Pokemon(name, level) {
  this.name = name;
  this.level = level;
  this.health = level *2500;
  this.attack = level * 1500;
}

const pokemon1 = new Pokemon("Seelie", 5);
const pokemon2 = new Pokemon("Brownyia", 3);

trainer.pokemon.push(pokemon1, pokemon2);

const trainerInfo = `Name: ${trainer.name}<br>
                     Age: ${trainer.age}<br>
                     Pokemon: ${trainer.pokemon.map(p => p.name).join(", ")}<br>
                     Friends: Express - ${trainer.friends.express.join(", ")}, Acquaintances - ${trainer.friends.acquaintances.join(", ")}`;
document.getElementById("trainer-info").innerHTML = trainerInfo;

displayPokemonInfo(pokemon1);

Pokemon.prototype.tackle = function(targetPokemon) {
  targetPokemon.health -= this.attack;
  console.log(`${this.name} used Butterfly Furry on ${targetPokemon.name}. ${targetPokemon.name}'s health is now ${targetPokemon.health}.`);
  if (targetPokemon.health <= 0) {
    targetPokemon.faint();
  }
};

Pokemon.prototype.faint = function() {
  console.log(`${this.name} has been defeated.`);
};

document.getElementById("talk-btn").addEventListener("click", function() {
  trainer.talk();
});

document.getElementById("tackle-btn").addEventListener("click", function() {
  pokemon1.tackle(pokemon2);
  displayPokemonInfo(pokemon2);
});

function displayPokemonInfo(pokemon) {
  const pokemonInfo = `Name: ${pokemon.name}<br>
                       Level: ${pokemon.level}<br>
                       Health: ${pokemon.health}<br>
                       Attack: ${pokemon.attack}`;
  document.getElementById("pokemon-info").innerHTML = pokemonInfo;
}