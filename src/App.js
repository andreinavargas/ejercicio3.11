import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Linkedin from './Linkedin';
import Filtros from './Filtros';

const ENDPOINT = 'https://randomuser.me/api/?results=50';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personas: []
    }

    this.fetchPeople = this.fetchPeople.bind(this);
    this.filterGenero= this.filterGenero.bind(this);
    this.filterCiudad= this.filterCiudad.bind(this);
  }

  fetchPeople() {
    fetch(ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          personas: data.results
        });
      });
  }
  filterCiudad(e){
    const resultado  =  this.state.personas.filter(function(persona) {
      return persona.location.city == e.target.value;
    });
    if (resultado.length > 0) {
      this.setState({
        personas: resultado
      });
    }

  }
  filterGenero(e){
    const resultado2 =  this.state.personas.filter(function(persona) {
      return persona.gender == e.target.value;
    });

    if (resultado2.length > 0) {
      this.setState({
        personas: resultado2
      });
    }
  }




  render() {
    return (
      <div className="container">
      { this.state.personas.map((persona) =>
        <Linkedin name={persona.name.first} imagen={persona.picture.thumbnail} ciudad={persona.location.city} edad={persona.age}></Linkedin>
    ) }


          <Filtros funcionfilter1={this.filterCiudad} funcionfilter2={this.filterGenero}></Filtros>
          <button onClick={this.fetchPeople}> Load people </button>
      </div>
    );
  }
}

export default App;
