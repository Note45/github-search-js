import React, { useState, useEffect } from 'react';

import { getRepos} from '../../services/api';
import Repositorio from '../../components/Repositorio'

import './styles.css';

function Dev({ data }){
    const [ repos, setRepos ] = useState([]);

    async function load(callBack) {
        const repos = await getRepos(data.login);
        callBack(repos);
        return repos;
    }

    useEffect(() => {load((value) => {setRepos(value)})}, []);
    
    return(
    <div id='divContainer'>
        <div id='containerImage'>
            <img id ='imgAvatar' src={data.avatar_url} alt='Avatar'/>
        </div>
        <div id='containerName'> 
            <p id='nameElement'>{data.name}</p>
            <p id='loginElement'>{data.login}</p>
            <p id='bioElement'>{data.bio}</p>
            <button id='buttonElement' onClick={()=>{window.open(data.html_url, '_blank')}}>Acessar</button>
        </div>
        <div id='containerReposito'>
            <strong><p>Repositórios</p></strong>
            {repos.map((value) => (<Repositorio key={value.id} data={value} />))}
        </div>
    </div>)
};

export default Dev;