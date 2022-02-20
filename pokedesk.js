//CODIGO ANTIGUO COMENTADO QUE DEVOLVIA PROMESAS
//const arrayapi = `https://pokeapi.co/api/v2/pokemon/${i}`;
//Pokemons.push(fetch(arrayapi).then(res => res.json())); este fetch devuelve un array de promesas
const div$$ = document.querySelector(".container");
const input$$ = document.querySelector("input");
const divSearch$$ = document.querySelector('.containerSearch');
const button$$ = document.querySelector(".ballserch");

let pokemonglobal = [];

//CONSEGUIMOS LOS POKEMONS DE LA API AÑADIENDO LA ITERACCION AL LINK PARA IDENTIFICAR LA URL Y LOS EMPUJAMOS
//A UN ARRAY VACIO POKEMONGLOBAL
const getcharacters = async () => {
  for (let i = 1; i <= 151; i++) {
    const pokemonsApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const pokemonsRes = await pokemonsApi.json();
    pokemonglobal.push(pokemonsRes);
  }

  //Promise.all(Pokemons).then(results => { Realizando esta funcion se convierten las promesas a objetos

  //RECORREMOS LOS POKEMONS DEL NUEVO ARRAY Y LOS MAPEAMOS PARA SOLO COGER UN SERIE DE VALORES DE LOS OBJETOS DE LA API
  const arrayapi = (pokemon) => {
    const pokemons = pokemon.map((property) => ({
      name: property.name,
      image: property.sprites.other["dream_world"]["front_default"],
      id: property.id,
      type: property.types[0].type.name,
      abilities: property.abilities[0].ability.name,
    }));
    print(pokemons);
  };
  arrayapi(pokemonglobal);
};

//PINTAMOS LOS VALORES EN EL HTML
const print = (pokemon) => {
  for (const poke of pokemon) {
    const div2$$ = document.createElement("div");
    div2$$.setAttribute("class", "pokemons");
    div2$$.innerHTML = `<h3>${poke.name}</h3>
                        <div class="divImage">
                          <img src="${poke.image}" 
                          class="imgPoke" alt="image ${poke.name}"/>
                        </div>
                        <div class="divp">
                          <p>Id: ${poke.id}</p>
                          <p>Type: ${poke.type}</p>
                          <p>Ability: ${poke.abilities}</p>
                        </div>`
    div$$.appendChild(div2$$);
  }
};

// BUSCADOR
button$$.addEventListener("click", () => {
  divSearch$$.innerHTML = "";
    
  for (const pokemon of pokemonglobal) {
      
    if ( input$$.value.toLowerCase() === pokemon.name) {
            const divs$$ = document.createElement("div");
            divs$$.setAttribute("class", "pokemons");
            divs$$.innerHTML = `<h3>${pokemon.name}</h3>
                                  <div class="divImage">
                                    <img src="${pokemon.sprites.other["dream_world"]["front_default"]}" 
                                    class="imgPoke" alt="image ${pokemon.name}"/>
                                  </div>
                                  <div class="divp">
                                    <p>Id: ${pokemon.id}</p>
                                    <p>Type: ${pokemon.types[0].type.name}</p>
                                    <p>Ability: ${pokemon.abilities[0].ability.name}</p>
                                  </div>`;
            divSearch$$.appendChild(divs$$);
                                  } 
            
    else if (input$$.value.toLowerCase() === pokemon.abilities[0].ability.name){
              const divt$$ = document.createElement("div");
            divt$$.setAttribute("class", "pokemons");
            divt$$.innerHTML = `<h3>${pokemon.name}</h3>
                                  <div class="divImage">
                                  <img src="${pokemon.sprites.other["dream_world"]["front_default"]}" 
                                  class="imgPoke" alt="image ${pokemon.name}"/>
                                  </div>
                                  <div class="divp">
                                    <p>Id: ${pokemon.id}</p>
                                    <p>Type: ${pokemon.types[0].type.name}</p>
                                    <p>Ability: ${pokemon.abilities[0].ability.name}</p>
                                  <div class="divp">`;
            divSearch$$.appendChild(divt$$);
            } 
    }
  })

getcharacters();
