import React from 'react';

class Filtros extends React.Component {
  render(){
    return (
    <div>
        <label htmlFor="ciudad">Ciudad</label>
        <input onChange={this.props.funcionfilter1} id="ciudad" type="text" name="ciudad"/>
        <label htmlFor="genero">Genero</label>
        <input onChange={this.props.funcionfilter2}  id="genero" type="text" name="genero"/>
    </div>
      );
  }
}

export default Filtros
;
