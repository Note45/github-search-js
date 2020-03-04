import React, { Component } from 'react';

import { searchDevs } from '../../services/api';
import Dev from '../../components/Dev';
import './styles.css';

export default class Main extends Component {
  state = {
    dev: [],
  }
  
  getDev = async () => {
   let response = await searchDevs();

   this.setState({ dev: [...this.state.dev, response ]});
  } 

  render() {
    return(
      <div>
        <div id="divBusca">
        <input type="text" id="txtBusca" placeholder="Buscar..."/>
        <button id="btnBusca" onClick={this.getDev}>Buscar</button>
        {console.log(this.state.dev)}
        </div> 
        {this.state.dev ?
          this.state.dev.map((value) => (<Dev data={value}/>)) : null}
      </div>
    );
  }
}