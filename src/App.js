
import React from 'react';
import Farmacias from './components/Farmacias';
import { useState } from 'react';
import FormDropdown from './components/MainForm';

function App() {
  //holi

//estado para guardar el value del menu select dropdown
const [valorSelect, setValorSelect] = useState('');
console.log(valorSelect);

  return (
    <div className="App text-white">
     
     <FormDropdown valorSelect={valorSelect} setValorSelect={setValorSelect}/>
     <Farmacias valorSelect={valorSelect}/>
    </div>
  );
}

export default App;
