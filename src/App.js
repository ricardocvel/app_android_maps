import React, {useEffect, useState} from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './componets/Devitem';

function App() {
  const [devs, setdevs] = useState([]);

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

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setdevs(response.data);
    }

    loadDevs();

  }, []); //passo apenas array vazio caso eu queira que execute apenas uma vez


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

    setdevs([...devs, response.data]);
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
          {devs.map(dev => (  
            <DevItem key={dev._id}  dev={dev}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;

//nao colocar chaves na => , pois este é o retorno da função, com chaves é para o corpo
//<span>{dev.techs.join(', ')}</span>     ==   juntando o array e o separando por virgula e espaço