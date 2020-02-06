import React, { Component } from 'react';

import api from '../../services/api';

import './styles.css'

export default class Main extends Component {
  state = {
    dev: [],
  }
  
  searchDevs = async () => {
    let inputElement = document.getElementById('txtBusca');

    let response = await api.get(`/${inputElement.value}`);

    this.setState({ dev: response.data });
  }
 
  renderDevs = async () => {
    //Continuar o render dos dev - APAGAR ESTE COMENTARIO
    await this.searchDevs();
    const { login, avatar_url, location, bio, name } = this.state.dev;

    let ulElement = document.getElementById('devs-list');
    
    let liElement = document.createElement('li');
    let textElement = document.createTextNode(bio);
    liElement.appendChild(textElement);

    ulElement.appendChild(liElement);

  } 

  render() {
    return(
      <div id="divBusca">
        <input type="text" id="txtBusca" placeholder="Buscar..."/>
        <button id="btnBusca" onClick={this.renderDevs}>Buscar</button>
        <ul id='devs-list'></ul>
      </div>
    );
  }
}