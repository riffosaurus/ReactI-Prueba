//importa el usestate y useffect
import React, { useState, useEffect } from "react";
//importa el componente de bootstrap de contenedor y card
import { Container, Card } from "react-bootstrap";


//funcion de componentes farmacias


function Farmacias() {


//Creamos el estado de info, que guardará la información de la api
    const [info, setInfo] = useState([]);

//Llamamos a la funcion que consume la API al momento de cargar o "montar" el componente
useEffect(() => {
    consultarInformacion()
  }, [])

//funcion que consultará la aPI
const consultarInformacion = async () => {
    //para poder consumir la API, tuvimos que instalar el CORS unblocker en el navegador
    const url = "http://farmanet.minsal.cl/index.php/ws/getLocalesTurnos";
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    let listaDeFarmacias = "";
    //revisamos que la API nos esté entregando la información
    console.log(resultado); 

    //recorremos el array resultado con for each
   //resultado.forEach((elemento) => console.log(elemento.local_nombre)
    //);

    for (let farmacia of resultado) {
        listaDeFarmacias += 
         `${farmacia.local_nombre} + `
        };

    setInfo(listaDeFarmacias);
 
};



    


    

  return (


    <div className="m-3 text-center">
        <h2>Farmacias de turno hoy</h2>
        <Container fluid className="pt-3">
           {/* mostramos todos los resultados que guardamos anteriormente*/}
           
           <Card className="bg-secondary">
            <Card.Body>
            <Card.Title>{info}</Card.Title>
        </Card.Body>
        </Card>
            
        </Container>
    </div>
  )
}

export default Farmacias