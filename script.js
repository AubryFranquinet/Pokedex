

//SEARCH POKEMON IN SEARCH INPUT
document.getElementById("getPokemon").addEventListener("click", getPokemon);

function getPokemon() {
    let pokemon = document.getElementById("pokemon").value;
    fetch(`https://pokeapi.co/api/v2/pokemon/` + pokemon)
        .then(response => response.json())
        .then(data => {
            

            let div = document.getElementById("pokemonInfo");
            let img = document.getElementById('pokemonImg');



            //display only first move of pokemon if he has only one move
            if (data.moves[0].move.name == "transform") {
                div.innerHTML =
                    '<h4 id = "ID"> ID : </h4>' + '<p id="dataID">' + data.id + '</p>' + '<br>' +
                    '<h4> Name : </h4>' + data.name + '<br>' +
                    '<h4> Moves : </h4>' + '- ' + data.moves[0].move.name + '<br>';

                img.innerHTML = '<img src="' + data.sprites.front_default + '">';
            }
            else {
                div.innerHTML =
                    '<h4 id = "ID"> ID : </h4>' + '<p id="dataID">' + data.id + '</p>' + '<br>' +
                    '<h4> Name : </h4>' + data.name + '<br>' +
                    '<h4> Moves : </h4>' + '- ' + data.moves[0].move.name + '<br>' + '- ' + data.moves[1].move.name + '<br>' + '- ' + data.moves[2].move.name + '<br>';

                img.innerHTML = '<img src="' + data.sprites.front_default + '">';
            }
        }

        )
    //GET EVOLUTION 1 OF POKEMON IF IT EXIST
    fetch(`https://pokeapi.co/api/v2/pokemon-species/` + pokemon)
        .then(response => response.json())
        .then(data => {
           

            let previousEvolution = document.getElementById("pokemonInfo");
            previousEvolution.innerHTML +=
                '<h4> Previous evolution : </h4>' + data.evolves_from_species.name;
        })
}


//GET NEXT POKEMON WHEN CLICK ON NEXT BUTTON 
document.getElementById("next").addEventListener("click", nextPokemon );
function nextPokemon() {
    let nxtPokemon = document.getElementById("dataID").innerText;
    
    
    
    nxtPokemon = parseInt(nxtPokemon);
    nxtPokemon++;
    

    

    fetch(`https://pokeapi.co/api/v2/pokemon/` + nxtPokemon)
        .then(response => response.json())
        .then(data => {
            

            let div = document.getElementById("pokemonInfo");
            let img = document.getElementById('pokemonImg');
            document.getElementById("pokemon").value = "";
            //display only first move of pokemon if he has only one move
            if (data.moves[0].move.name == "transform") {
                div.innerHTML =
                    '<h4 id = "ID"> ID : </h4>' + '<p id="dataID">' + data.id + '</p>' + '<br>' +
                    '<h4> Name : </h4>' + data.name + '<br>' +
                    '<h4> Moves : </h4>' + '- ' + data.moves[0].move.name + '<br>';

                img.innerHTML = '<img src="' + data.sprites.front_default + '">';
            }
            else {
                div.innerHTML =
                    '<h4 id = "ID"> ID : </h4>' + '<p id="dataID">' + data.id + '</p>' + '<br>' +
                    '<h4> Name : </h4>' + data.name + '<br>' +
                    '<h4> Moves : </h4>' + '- ' + data.moves[0].move.name + '<br>' + '- ' + data.moves[1].move.name + '<br>' + '- ' + data.moves[2].move.name + '<br>';

                img.innerHTML = '<img src="' + data.sprites.front_default + '">';
            }
        }

        )

    fetch(`https://pokeapi.co/api/v2/pokemon-species/` + nxtPokemon)
        .then(response => response.json())
    fetch(`https://pokeapi.co/api/v2/pokemon/` + nxtPokemon)
        .then(response => response.json())
        .then(data => {
            

            let div = document.getElementById("pokemonInfo");
            let img = document.getElementById('pokemonImg');
            document.getElementById("pokemon").value = "";


            //display only first move of pokemon if he has only one move
            if (data.moves[0].move.name == "transform") {
                div.innerHTML =
                    '<h4 id = "ID"> ID : </h4>' + '<p id="dataID">' + data.id + '</p>' + '<br>' +
                    '<h4> Name : </h4>' + data.name + '<br>' +
                    '<h4> Moves : </h4>' + '- ' + data.moves[0].move.name + '<br>';

                img.innerHTML = '<img src="' + data.sprites.front_default + '">';
            }
            else {
                div.innerHTML =
                    '<h4 id = "ID"> ID : </h4>' + '<p id="dataID">' + data.id + '</p>' + '<br>' +
                    '<h4> Name : </h4>' + data.name + '<br>' +
                    '<h4> Moves : </h4>' + '- ' + data.moves[0].move.name + '<br>' + '- ' + data.moves[1].move.name + '<br>' + '- ' + data.moves[2].move.name + '<br>';

                img.innerHTML = '<img src="' + data.sprites.front_default + '">';
            }
        }

        )
    fetch(`https://pokeapi.co/api/v2/pokemon-species/` + nxtPokemon)
        .then(response => response.json())
        .then(data => {


            let previousEvolution = document.getElementById("pokemonInfo");
            previousEvolution.innerHTML +=
                '<h4> Previous evolution : </h4>' + data.evolves_from_species.name;
        })
}

//GET NEXT POKEMON WHEN CLICK ON NEXT BUTTON 
document.getElementById("past").addEventListener("click", previousPokemon);
function previousPokemon() {
    let pastPokemon = document.getElementById("dataID").innerText;

    

    pastPokemon = parseInt(pastPokemon);
    pastPokemon--;
    
    //clear input
    document.getElementById("pokemon").value = "";



    fetch(`https://pokeapi.co/api/v2/pokemon/` + pastPokemon)
        .then(response => response.json())
        .then(data => {


            let div = document.getElementById("pokemonInfo");
            let img = document.getElementById('pokemonImg');

            //display only first move of pokemon if he has only one move
            if (data.moves[0].move.name == "transform") {
                div.innerHTML =
                    '<h4 id = "ID"> ID : </h4>' + '<p id="dataID">' + data.id + '</p>' + '<br>' +
                    '<h4> Name : </h4>' + data.name + '<br>' +
                    '<h4> Moves : </h4>' + '- ' + data.moves[0].move.name + '<br>';

                img.innerHTML = '<img src="' + data.sprites.front_default + '">';
            }
            else {
                div.innerHTML =
                    '<h4 id = "ID"> ID : </h4>' + '<p id="dataID">' + data.id + '</p>' + '<br>' +
                    '<h4> Name : </h4>' + data.name + '<br>' +
                    '<h4> Moves : </h4>' + '- ' + data.moves[0].move.name + '<br>' + '- ' + data.moves[1].move.name + '<br>' + '- ' + data.moves[2].move.name + '<br>';

                img.innerHTML = '<img src="' + data.sprites.front_default + '">';
            }
        }

        )

    fetch(`https://pokeapi.co/api/v2/pokemon-species/` + pastPokemon)
        .then(response => response.json())
    fetch(`https://pokeapi.co/api/v2/pokemon/` + pastPokemon)
        .then(response => response.json())
        .then(data => {
            

            let div = document.getElementById("pokemonInfo");
            let img = document.getElementById('pokemonImg');



            //display only first move of pokemon if he has only one move
            if (data.moves[0].move.name == "transform") {
                div.innerHTML =
                    '<h4 id = "ID"> ID : </h4>' + '<p id="dataID">' + data.id + '</p>' + '<br>' +
                    '<h4> Name : </h4>' + data.name + '<br>' +
                    '<h4> Moves : </h4>' + '- ' + data.moves[0].move.name + '<br>';

                img.innerHTML = '<img src="' + data.sprites.front_default + '">';
            }
            else {
                div.innerHTML =
                    '<h4 id = "ID"> ID : </h4>' + '<p id="dataID">' + data.id + '</p>' + '<br>' +
                    '<h4> Name : </h4>' + data.name + '<br>' +
                    '<h4> Moves : </h4>' + '- ' + data.moves[0].move.name + '<br>' + '- ' + data.moves[1].move.name + '<br>' + '- ' + data.moves[2].move.name + '<br>';

                img.innerHTML = '<img src="' + data.sprites.front_default + '">';
            }
        }

        )
    fetch(`https://pokeapi.co/api/v2/pokemon-species/` + pastPokemon)
        .then(response => response.json())
        .then(data => {


            let previousEvolution = document.getElementById("pokemonInfo");
            previousEvolution.innerHTML +=
                '<h4> Previous evolution : </h4>' + data.evolves_from_species.name;
        })
}
