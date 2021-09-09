const animals = [
  "Aardvark",
  "Albatross",
  "Alligator",
  "Alpaca",
  "Ant",
  "Anteater",
  "Antelope",
  "Ape",
  "Armadillo",
  "Donkey",
  "Baboon",
  "Badger",
  "Barracuda",
  "Bat",
  "Bear",
  "Beaver",
  "Bison",
  "Boar",
  "Buffalo",
  "Butterfly",
  "Camel",
  "Capybara",
  "Caribou",
  "Cassowary",
  "Cat",
  "Caterpillar",
  "Cattle",
  "Chamois",
  "Cheetah",
  "Chicken",
  "Chimpanzee",
  "Chinchilla",
  "Chough",
  "Clam",
  "Cobra",
  "Cockroach",
  "Cod",
  "Cormorant",
  "Coyote",
  "Crab",
  "Crane",
  "Crocodile",
  "Crow",
  "Curlew",
  "Deer",
  "Dinosaur",
  "Dog",
  "Dogfish",
  "Dolphin",
  "Dotterel",
  "Dove",
  "Dragonfly",
  "Duck",
  "Dugong",
  "Dunlin",
  "Eagle",
  "Echidna",
  "Eland",
  "Elephant",
  "Elk",
  "Emu",
  "Falcon",
  "Ferret",
  "Finch",
  "Fish",
  "Flamingo",
  "Fly",
  "Fox",
  "Frog",
  "Gaur",
  "Gazelle",
  "Gerbil",
  "Giraffe",
  "Gnat",
  "Gnu",
  "Goat",
  "Goldfinch",
  "Goldfish",
  "Goose",
  "Gorilla",
  "Goshawk",
  "Grasshopper",
  "Grouse",
  "Guanaco",
  "Gull",
  "Hamster",
  "Hare",
  "Hawk",
  "Hedgehog",
  "Heron",
  "Herring",
  "Hippopotamus",
  "Hornet",
  "Horse",
  "Human",
  "Hummingbird",
  "Hyena",
  "Ibex",
  "Ibis",
  "Jackal",
  "Jaguar",
  "Jay",
  "Jellyfish",
  "Kangaroo",
  "Kid",
  "Kingfisher",
  "Koala",
  "Kookabura",
  "Kouprey",
  "Kudu",
  "Lapwing",
  "Lark",
  "Lemur",
  "Leopard",
  "Lion",
  "Llama",
  "Lobster",
  "Locust",
  "Loris",
  "Louse",
  "Lyrebird",
  "Magpie",
  "Mallard",
  "Manatee",
  "Mandrill",
  "Mantis",
  "Marten",
  "Meerkat",
  "Mink",
  "Mole",
  "Mongoose",
  "Monkey",
  "Moose",
  "Mosquito",
  "Mouse",
  "Mule",
  "Narwhal",
  "Newt",
  "Nightingale",
  "Octopus",
  "Okapi",
  "Opossum",
  "Oryx",
  "Ostrich",
  "Otter",
  "Owl",
  "Oyster",
  "Panther",
  "Parrot",
  "Partridge",
  "Peafowl",
  "Pelican",
  "Penguin",
  "Pheasant",
  "Pig",
  "Pigeon",
  "Pony",
  "Porcupine",
  "Porpoise",
  "Quail",
  "Quelea",
  "Quetzal",
  "Rabbit",
  "Raccoon",
  "Rail",
  "Ram",
  "Rat",
  "Raven",
  "Red deer",
  "Red panda",
  "Reindeer",
  "Rhinoceros",
  "Rook",
  "Lamb",
  "Salamander",
  "Salmon",
  "Sand Dollar",
  "Sandpiper",
  "Sardine",
  "Scorpion",
  "Seahorse",
  "Seal",
  "Shark",
  "Sheep",
  "Shrew",
  "Skunk",
  "Snail",
  "Snake",
  "Sparrow",
  "Spider",
  "Spoonbill",
  "Squid",
  "Squirrel",
  "Starling",
  "Stingray",
  "Stinkbug",
  "Stork",
  "Swallow",
  "Swan",
  "Tapir",
  "Tarsier",
  "Termite",
  "Tiger",
  "Dragon",
  "Toad",
  "Trout",
  "Turkey",
  "Turtle",
  "Viper",
  "Vulture",
  "Wallaby",
  "Walrus",
  "Wasp",
  "Weasel",
  "Whale",
  "Wildcat",
  "Wolf",
  "Wolverine",
  "Wombat",
  "Woodcock",
  "Woodpecker",
  "Worm",
  "Wren",
  "Yak",
  "Zebra",
  "Man",
  "Woman",
  "Child",
  "God",
];

const titleSearch = document.querySelector("#title-input");
const title = document.querySelector("#title");
const imgurl = document.querySelector("#img-url");
const description = document.querySelector("#description");
const rating = document.querySelector("#rating");
const actors = document.querySelector("#actors");
const year = document.querySelector("#year");
const genre = document.querySelector("#genre");
const image = document.querySelector("#film-poster");
const originalTitle = document.createElement("p");
const originalDescription = document.createElement("p");
const originalActors = document.createElement("p");
const submit = document.querySelector("#submit");
const post = document.querySelector("#post");
let gridArea = 1;

function squirrelfy(string) {
  const regex = new RegExp(animals.join("|"), "gi");
  return string.replace(regex, (match) =>
    match[0] === match[0].toUpperCase() ? "Squirrel" : "squirrel"
  );
}

function nuttify(string) {
  const regex = /n[a-zA-Z]t/gi;
  return string.replace(regex, (match) =>
    match[0] === match[0].toUpperCase() ? "Nut" : "nut"
  );
}

async function getData() {
  // "Access-Control-Allow-Origin",
  const response = await fetch("http://localhost:3000/films", {
    headers: { "Content-Type": "application/json" },
  });
  // console.log(response);
  const data = await response.json();
  console.log(data);

  return data.payload;
}

// create a tile and place in grid area
function createTile(film, row, col) {
  console.log(film);
  let container = document.createElement("div");
  container.classList.add("container");
  //
  let card = document.createElement("div");
  card.classList.add("card");
  //
  let front = document.createElement("div");
  front.classList.add("front");
  //
  let back = document.createElement("div");
  back.classList.add("back");
  //
  let img = document.createElement("img");
  img.classList.add("image");
  img.src = film.imgurl;
  //
  let title = document.createElement("h4");
  title.classList.add("title");
  title.innerText = nuttify(squirrelfy(film.title));
  let titleCopy = document.createElement("h4");
  titleCopy.innerText = nuttify(squirrelfy(film.title));
  //
  let yearGenre = document.createElement("h5");
  yearGenre.classList.add("yearGenre");
  yearGenre.id = "h5";
  yearGenre.innerText = nuttify(squirrelfy(film.year + " ‧ " + film.genre));
  //
  let desc = document.createElement("p");
  desc.classList.add("desc");
  desc.innerText = nuttify(squirrelfy(film.description));
  //
  let rating = document.createElement("p");
  rating.classList.add("rating");
  rating.innerText = `${"🌰".repeat(Math.round(film.rating / 10))} /10`;
  //
  front.append(img, title);
  back.append(titleCopy, yearGenre, rating, desc);
  card.append(front, back);
  container.append(card);
  document.body.append(container);
  container.style.gridArea =
    row + " / " + col + " / " + "auto" + " / " + "auto";
}
let row = 2;
let col = 1;
async function populateAllTiles() {
  const films = await getData();
  for (let film of films) {
    createTile(film, row, col);
    col++;
    if (col === 6) {
      row++;
      col = 1;
    }
  }
}

populateAllTiles();

async function createFilm() {
  const response = await fetch(
    `https://www.omdbapi.com/?t=${titleSearch.value}&apikey=5c89788a`
  );
  const data = await response.json();
  originalTitle.innerText = data.Title;
  originalDescription.innerText = data.Plot;
  originalActors.innerText = data.Actors;
  title.innerText = nuttify(squirrelfy(data.Title));
  description.innerText = nuttify(squirrelfy(data.Plot));
  rating.innerText = data.imdbRating * 10;
  actors.innerText = nuttify(squirrelfy(data.Actors));
  year.innerText = data.Year;
  genre.innerText = data.Genre;
}

async function postFilm() {
  const filmData = {
    title: originalTitle.innerText,
    imgurl: imgurl.value,
    description: originalDescription.innerText,
    rating: rating.innerText,
    actors: originalActors.innerText,
    year: year.innerText,
    genre: genre.innerText,
  };
  console.log(filmData);
  const response = await fetch("http://localhost:3000/films", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(filmData),
  });
  const data = await response.json();
  createTile(data.rows, row, col);
  col++;
  if (col === 6) {
    row++;
    col = 1;
  }
}

submit.addEventListener("click", createFilm);
post.addEventListener("click", postFilm);
imgurl.addEventListener("change", () => {
  image.src = imgurl.value;
});
