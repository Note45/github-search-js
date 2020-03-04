import React, { Component } from 'react';

import api from '../../services/api';
import Dev from '../../components/Dev';
import './styles.css';

export default class Main extends Component {
  state = {
    dev: {},
  }
  
  searchDevs = async () => {
    let inputElement = document.getElementById('txtBusca');

    let response = await api.get(`/${inputElement.value}`);
    this.setState({ dev: response.data });
    
  }
 
  renderDevs = async () => {
    await this.searchDevs();
  } 

  render() {
    return(
      <div>
        <div id="divBusca">
        <input type="text" id="txtBusca" placeholder="Buscar..."/>
        <button id="btnBusca" onClick={this.renderDevs}>Buscar</button>
        {console.log(this.state.dev)}
        </div> 
        {this.state.dev.login ?
          <Dev data={this.state.dev} /> : null}
      </div>

    );
  }
}