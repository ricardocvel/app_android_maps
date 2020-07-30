import React, {useEffect, useState} from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


function App() {
  
  const [github_username, setGithubuserneme] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');



  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude} = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) =>{
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);


  async function handleSddDev(e){
    e.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude,
    })
    setGithubuserneme('');
    setTechs('');
  }



  return (
    <div id = "app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleSddDev}>
          <div className="input_block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input
             name="github_username" 
             id="githiub_username" 
             required
             value={github_username}
             onChange={e => setGithubuserneme(e.target.value)}
             />
          </div>

          <div className="input_block">
            <label htmlFor="techs">Tecnologias</label>
            <input
             name="techs" 
             id="techs" 
             required
             value={techs}
             onChange={e => setTechs(e.target.value)}
             />
          </div>
          
          <div className="input-group">
            <div className="input_block">
              <label htmlFor="latitude">Latitude</label>
              <input
               type="number" 
               name="latitude" 
               id="latitude" 
               required value={latitude}
               onChange={e => setLatitude(e.target.value)}
               />
            </div>
            <div className="input_block">
              <label htmlFor="longitude">Latitude</label>
              <input
               type="number" 
               name="longitude" 
               id="longitude" 
               required value={longitude}
               onChange={e => setLongitude(e.target.value)}
               />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>   
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/46923915?s=460&v=4" alt="ricardo campos"/>
              <div className="user-info">
                <strong>Ricardo Campos</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>O segredo da felicidade é a liberdade, o segredo da liberdade, coragem!</p>
            <a href="https://github.com/ricardocvel">Acessar Perfio no GitHub </a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/46923915?s=460&v=4" alt="ricardo campos"/>
              <div className="user-info">
                <strong>Ricardo Campos</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>O segredo da felicidade é a liberdade, o segredo da liberdade, coragem!</p>
            <a href="https://github.com/ricardocvel">Acessar Perfio no GitHub </a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/46923915?s=460&v=4" alt="ricardo campos"/>
              <div className="user-info">
                <strong>Ricardo Campos</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>O segredo da felicidade é a liberdade, o segredo da liberdade, coragem!</p>
            <a href="https://github.com/ricardocvel">Acessar Perfio no GitHub </a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/46923915?s=460&v=4" alt="ricardo campos"/>
              <div className="user-info">
                <strong>Ricardo Campos</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>O segredo da felicidade é a liberdade, o segredo da liberdade, coragem!</p>
            <a href="https://github.com/ricardocvel">Acessar Perfio no GitHub </a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
