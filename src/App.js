
import React from 'react';
import { useState } from 'react';
import Farmacias from './components/MiApi';
import FormDropdown from './components/FormRegiones';


function App() {

  //estado para guardar el value del menu select dropdown segun región
  const [valorSelect, setValorSelect] = useState('');
  //estado para guardar el value del menu select dropdown segun orden alfabetico ascendente o descendente
  const [valorSelect2, setValorSelect2] = useState('');
  //Creamos el estado de info, que guardará la información de la api
  const [info, setInfo] = useState([]);

  return (
    <div className="App text-white">
      <FormDropdown valorSelect={valorSelect} setValorSelect={setValorSelect} valorSelect2={valorSelect2} setValorSelect2={setValorSelect2} />
      <Farmacias valorSelect={valorSelect} info={info} setInfo={setInfo} valorSelect2={valorSelect2} />
    </div>
  );
}

export default App;
