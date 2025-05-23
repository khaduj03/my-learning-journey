const SUPER_TOKEN = "dd523bc425b1606feb158a4d4bd6e688";
const BASE_URL = `https://www.superheroapi.com/api.php/${SUPER_TOKEN}`;

const displayHero = (hero) => {
  if (!hero) {
    document.querySelector("#dog").innerHTML = "<p>No hero found</p>";
    document.getElementById("description").innerHTML = "";
    return;
  }
  console.log(hero);
  document.querySelector(
    "#dog"
  ).innerHTML = `<img src="${hero.image.url}" width="200" height="200">`;
  document.getElementById("description").innerHTML = `
    <p>Name: ${hero.name}</p>
    <p>Intelligence: ${hero.powerstats.intelligence}</p>
    <p>Strength: ${hero.powerstats.strength}</p>
    <p>Speed: ${hero.powerstats.speed}</p>
  `;
};

const getSuperHero = (id) => {
  fetch(`${BASE_URL}/${id}`)
    .then((response) => response.json())
    .then((json) => {
      if (json.response === "success") {
        displayHero(json);
      } else {
        displayHero(null);
      }
    })
    .catch(() => displayHero(null));
};

const search = (name) => {
  fetch(`${BASE_URL}/search/${name}`)
    .then((response) => response.json())
    .then((json) => {
      if (json.response === "success" && json.results.length > 0) {
        displayHero(json.results[0]);
      } else {
        displayHero(null);
      }
    })
    .catch(() => displayHero(null));
};

const getHeroRandom = () => {
  const number = 731; // total number of heroes in the API
  return Math.floor(Math.random() * number) + 1;
};

// DOM elements
const input = document.getElementById("lname");
const searchBtn = document.getElementById("searchBtn");
const randomBtn = document.getElementById("randomBtn");

searchBtn.onclick = () => {
  const name = input.value.trim();
  if (name) {
    search(name);
  }
};

randomBtn.onclick = () => {
  const randomId = getHeroRandom();
  getSuperHero(randomId);
};
