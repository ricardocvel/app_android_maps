import React, {useEffect, useState} from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevForm from './componets/DevForm';
import DevItem from './componets/Devitem';

function App() {
  const [devs, setdevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setdevs(response.data);
    }

    loadDevs();

  }, []); //passo apenas array vazio caso eu queira que execute apenas uma vez


  async function handleSaddDev(data){
    const response = await api.post('/devs', data);
    setdevs([...devs, response.data]);
  }



  return (
    <div id = "app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleSaddDev}/>
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