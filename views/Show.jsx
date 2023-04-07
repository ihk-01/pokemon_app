const React = require('react');

class Show extends React.Component {
  render() {
    const pokemon = this.props.pokemon
    return (
      <div>
        <h1> Gotta Catch 'Em All </h1>
        {pokemon.name}
        <img src={pokemon.img}/>
        <br></br>
        <br></br>
        <a href={'/pokemon'}>Back</a>
      </div>
    )
  }
}


module.exports = Show;

