//Globale Variablen
const pokemonBilderQuelle = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

const pokemons = [
    {name: "Pikachu", type: "Elektro", image: `${pokemonBilderQuelle}25.png`},
    {name: "Glumanda", type: "Feuer", image: `${pokemonBilderQuelle}4.png`}, 
    {name: "Schiggy", type: "Wasser", image: `${pokemonBilderQuelle}7.png`}, 
    {name: "Bisasam", type: "Pflanze", image: `${pokemonBilderQuelle}1.png`}, 
    {name: "Evoli", type: "Normal", image: `${pokemonBilderQuelle}133.png`},
    {name: "Bisaknosp", type: "Pflanze", image: `${pokemonBilderQuelle}2.png`},
    {name: "Bisaflor", type: "Pflanze", image: `${pokemonBilderQuelle}3.png`},
    {name: "Evoli", type: "Normal", image: `${pokemonBilderQuelle}133.png`},
    {name: "Schillok", type: "Wasser", image: `${pokemonBilderQuelle}8.png`},
    {name: "Glurak", type: "Feuer", image: `${pokemonBilderQuelle}6.png`},

];
//HTML-Elemente
let newElement = document.createElement("div");
newElement.id = "title-section";
newElement.classList.add("container");
document.body.appendChild(newElement);

let newElement2 = document.createElement("h1");
newElement2.id = "title";
newElement2.textContent = "mein Pokédex";
newElement.appendChild(newElement2);

let newElement3 = document.createElement("div");
newElement3.id = "pokemon-cards";
newElement3.classList.add("container");
document.body.appendChild(newElement3);

for (const pokemon of pokemons){
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h2");
    title.textContent = pokemon.name;

    const image = document.createElement("img");
    image.src = pokemon.image;

    const type = document.createElement("p");
    type.textContent = "Typ " + pokemon.type;

    switch(pokemon.type){
        case "Feuer":
            type.style.color = "red";
            break;
        case "Wasser":
            type.style.color = "blue";
            break;
        case "Pflanze":
            type.style.color = "green";
            break;
        default:
            type.style.color = "black";
            break;
    }
    



    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(type);

    const pokemon_cards = document.getElementById("pokemon-cards");
    pokemon_cards.appendChild(card);
}


//Funktionen
//Event-Listeners