const PLAYERS = [
  "Spiderman",
  "Captain America",
  "Wonderwoman",
  "Popcorn",
  "Gemwoman",
  "Bolt",
  "Antwoman",
  "Mask",
  "Tiger",
  "Captain",
  "Catwoman",
  "Fish",
  "Hulk",
  "Ninja",
  "Black Cat",
  "Volverine",
  "Thor",
  "Slayer",
  "Vader",
  "Slingo",
];
let detailedPlayers = [];
// initialize players with image and strength
const initPlayers = (players) => {
  for (var i = 0; i < PLAYERS.length; i++) {
    var players = {
      name: PLAYERS[i],
      strenght: getRandomStrength(),
      image: "./images/super-"(i + 1) + ".png",
      type: "hero|villian",
    };
    detailedPlayers.push(players);
  }

  return detailedPlayers;
};

// getting random strength
const getRandomStrength = () => {
  // Return a random integer (0,100]
  // Note: You can use Math.random() and Math.ceil()
  return Math.floor(Math.random() * 101);
};

const buildPlayers = (players, type) => {
  let fragment = "";
  for (var i = 0; i < PLAYERS.length; i++) {
    fragment = `
        <div class="player>
            <img src ="${detailedPlayers[i].image}" alt="character">
            <h3> ${detailedPlayers[i].name} </h3>
            <h4> ${detailedPlayers[i].strenght}</h4>
        </div> `
  }
  return fragment;
};
// Display players in HTML
const viewPlayers = (players) => {
  let display = "";
  document.getElementById("heroes").innerHTML = buildPlayers(players, "hero");
  document.getElementById("villains").innerHTML = buildPlayers(
    players,
    "villain"
  );
  display = ` <div>
  <p> ${detailedPlayers} </p>
  </div> `
  return display;



};

window.onload = () => {
  viewPlayers(initPlayers(PLAYERS));
};