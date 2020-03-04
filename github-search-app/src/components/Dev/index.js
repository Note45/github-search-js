import React from 'react';

import './styles.css';

function Dev({ data }){
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
    </div>)
};

export default Dev;