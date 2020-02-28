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
    await this.searchDevs();
    const { login, avatar_url, bio, name } = this.state.dev;

    let divContainer = document.getElementById('divContainer');

    let imgAvatar = document.createElement('img');
    imgAvatar.setAttribute('src', avatar_url);
    imgAvatar.setAttribute('alt', 'Avatar');

    let nameElement = document.createElement('p');
    let textElement = document.createTextNode(name);
    nameElement.appendChild(textElement);

    let loginElement = document.createElement('p');
    textElement = document.createTextNode(login);
    loginElement.appendChild(textElement);

    let bioElement = document.createElement('p');
    textElement = document.createTextNode(bio);
    bioElement.appendChild(textElement);

    divContainer.appendChild(imgAvatar);
    divContainer.appendChild(nameElement);
    divContainer.appendChild(loginElement);
    divContainer.appendChild(bioElement);
  } 

  render() {
    return(
      <div>
        <div id="divBusca">
        <input type="text" id="txtBusca" placeholder="Buscar..."/>
        <button id="btnBusca" onClick={this.renderDevs}>Buscar</button>
        </div> 
        <div id='divContainer'>
        </div>
      </div>

    );
  }
}