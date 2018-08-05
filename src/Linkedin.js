import React from 'react';

class Linkedin extends React.Component {
  render(){
    return (
    <div>
      <h2> {this.props.name} </h2>
      <img src={this.props.imagen}/>
      <h3>{this.props.ciudad}</h3>
      <h3>{this.props.edad}</h3>
    </div>
      );
  }
}

export default Linkedin;
