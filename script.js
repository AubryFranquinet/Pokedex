

//on click function getPokemon on button
document.getElementById("getPokemon").addEventListener("click", getPokemon);

function getPokemon() {
    let pokemon = document.getElementById("pokemon").value;
    fetch(`https://pokeapi.co/api/v2/pokemon/` + pokemon)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            let div = document.getElementById("pokemonInfo");
            let img = document.getElementById('pokemonImg');

            div.innerHTML = 
            ' ID : ' + data.id + '<br>' + 
            ' Name : ' + data.name + '<br>';

            img.innerHTML = '<img src="' + data.sprites.front_default + '">';
            

        })

    fetch(`https://pokeapi.co/api/v2/pokemon-species/` + pokemon)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            let previousEvolution = document.getElementById("pokemonInfo");
            previousEvolution.innerHTML += 
            ' Previous evolution : ' + data.evolves_from_species.name;
        })
}