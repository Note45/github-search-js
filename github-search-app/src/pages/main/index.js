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
    const { login, avatar_url, bio, name, html_url } = this.state.dev;

    let divContainer = document.getElementById('divContainer');

    let containerImage = document.createElement('div');
    containerImage.setAttribute('id', 'containerImage');

    let containerName = document.createElement('div');
    containerName.setAttribute('id', 'containerName');

    let buttonElement = document.createElement('button');
    buttonElement.setAttribute('id', 'buttonElement');
    buttonElement.setAttribute('onclick', `${window.open(html_url, '_blank')}`);
    let textElement = document.createTextNode('Acessar');
    buttonElement.appendChild(textElement);

    let imgAvatar = document.createElement('img');
    imgAvatar.setAttribute('src', avatar_url);
    imgAvatar.setAttribute('alt', 'Avatar');
    imgAvatar.setAttribute('id', 'imgAvatar');
    containerImage.appendChild(imgAvatar);

    let nameElement = document.createElement('p');
    nameElement.setAttribute('id', 'nameElement');
    textElement = document.createTextNode(name);
    nameElement.appendChild(textElement);
    containerName.appendChild(nameElement);

    let loginElement = document.createElement('p');
    loginElement.setAttribute('id', 'loginElement');
    textElement = document.createTextNode(login);
    loginElement.appendChild(textElement);
    containerName.appendChild(loginElement);

    let bioElement = document.createElement('p');
    bioElement.setAttribute('id', 'bioElement');
    textElement = document.createTextNode(bio);
    bioElement.appendChild(textElement);
    containerName.appendChild(bioElement);

    containerName.appendChild(buttonElement);
    divContainer.appendChild(containerImage);
    divContainer.appendChild(containerName);
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