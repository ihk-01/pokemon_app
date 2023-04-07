const React = require('react');

class Index extends React.Component {
  render() {
    const pokemon = this.props.pokemon
    return (
      <div>
        <h1> 'See All The Pokemon!' </h1>

        {pokemon.map((pokemon, i) => {
          return (
            <ul>
              <li>
                <a href={`/pokemon/${i}`}>
                  {pokemon.name}</a>

                <img src={pokemon.img}></img>

              </li>
            </ul>
          )
        })}
      </div>
    )
  }
}
/*function capitalizeWords(arr) {
    return
        arr.map((pokemon)=> {
      const capitalizedFirst = pokemon.charAt(0).toUpperCase();
      const rest = pokemon.slice(1).toLowerCase();
      return capitalizedFirst + rest;
    });
  }
  console.log(capitalizeWords(pokemon));*/
module.exports = Index;
