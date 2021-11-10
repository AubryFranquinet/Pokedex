

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
                '<h4> ID : </h4>' + data.id + '<br>' +
                '<h4> Name : </h4>' + data.name + '<br>' +
                '<h4> Moves : </h4>' + '- ' + data.moves[0].move.name + '<br>' + '- ' + data.moves[1].move.name + '<br>' + '- ' + data.moves[2].move.name + '<br>';

            img.innerHTML = '<img src="' + data.sprites.front_default + '">';

            //if data.move[1] is undefined, then it will not show the second move
            if (data.moves[1] === undefined) {
                div.innerHTML += '<h4> Moves : </h4>' + '- ' + data.moves[0].move.name + '<br>';
            }
        }

        )

    fetch(`https://pokeapi.co/api/v2/pokemon-species/` + pokemon)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            let previousEvolution = document.getElementById("pokemonInfo");
            previousEvolution.innerHTML +=
                '<h4> Previous evolution : </h4>' + data.evolves_from_species.name;
        })
}