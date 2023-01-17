
import React from 'react';
import Farmacias from './components/MiApi';
import { useState } from 'react';
import FormDropdown from './components/FormRegiones';

function App() {

//estado para guardar el value del menu select dropdown
const [valorSelect, setValorSelect] = useState('');
//Creamos el estado de info, que guardará la información de la api
const [info, setInfo] = useState([]);
//console.log para revisar el cambio de valor al seleccionar opciones del dropdown
console.log(valorSelect + ' APP');

  return (
    <div className="App text-white">
     
     <FormDropdown valorSelect={valorSelect} setValorSelect={setValorSelect}/>
     <Farmacias    valorSelect={valorSelect} info={info} setInfo={setInfo}/>
    </div>
  );
}

export default App;
