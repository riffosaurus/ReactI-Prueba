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
    //revisamos que la API nos esté entregando la información
    console.log(resultado); 
//con setInfo guardamos la información en el estado info de la primera farmacia
    setInfo(`La farmacia de turno es ${resultado[0].local_nombre}`);
    };

  return (


    <div>
        <h2>Farmacia de turno hoy</h2>
        <Container>
           {/* mostramos todos los resultados que guardamos anteriormente*/}
            <Card>
                <Card.Body>
                    <Card.Title>{info}</Card.Title>
                </Card.Body>
            </Card>
        </Container>
    </div>
  )
}

export default Farmacias