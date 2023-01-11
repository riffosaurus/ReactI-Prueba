
import React from 'react';
import Farmacias from './components/Farmacias';
import { useState } from 'react';
import FormDropdown from './components/MainForm';

function App() {

//estado para guardar el value del menu select dropdown
const [valorSelect, setValorSelect] = useState('');
//Creamos el estado de info, que guardará la información de la api
const [info, setInfo] = useState([]);
console.log(valorSelect);

  return (
    <div className="App text-white">
     
     <FormDropdown valorSelect={valorSelect} setValorSelect={setValorSelect}/>
     <Farmacias valorSelect={valorSelect} info={info} setInfo={setInfo}/>
    </div>
  );
}

export default App;
