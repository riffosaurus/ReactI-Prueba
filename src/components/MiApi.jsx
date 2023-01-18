//importa el usestate y useffect
import React, { useState, useEffect } from "react";
//importa el componente de bootstrap de contenedor y card
import { Container, Card, Row, Col, Button} from "react-bootstrap";


//funcion de componentes farmacias


function Farmacias(props) {



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
    //sort de resultado a partir de la comuna
    resultado.sort((a, b) => (a.comuna_nombre > b.comuna_nombre) ? 1 : -1);
//retornamos resultado para que sea guardado en el estado info
    props.setInfo(resultado);


}
//console.log para asegurarnos que farmacias esté leyendo el nuevo valor del menú dropdown cuando se actualiza
console.log(props.valorSelect + ' componente famacias')



    const renderCard = (card, index) => {
      //la condición filtrará las farmacias de acuerdo al valor del menú dropdown
      if (card.fk_region === props.valorSelect)
      

        return(
         
          <Col className="d-flex align-items-stretch col-sm-2 pt-4">
          <Card key={index} className="bg-secondary w-100">
            <Card.Body>
              <Card.Title>{card.local_nombre}</Card.Title>
              <Card.Text>
                Comuna de {card.comuna_nombre}
              </Card.Text>
              <Card.Text>
                Dirección: {card.local_direccion}
              </Card.Text>
              <Card.Text>
                Teléfono: {card.local_telefono}
              </Card.Text>
              
              </Card.Body>
              </Card>
              </Col>
        )
        //esta condición mostrará todas las farmacias cuando el valor del menú dropdown sea vacío
        else if (props.valorSelect === '')
        return(
          <Col className="d-flex align-items-stretch col-sm-2 pt-4">
          <Card key={index} className="bg-secondary w-100">
            <Card.Body>
              <Card.Title>{card.local_nombre}</Card.Title>
              <Card.Text>
                Comuna de {card.comuna_nombre}
              </Card.Text>
              <Card.Text>
                Dirección: {card.local_direccion}
              </Card.Text>
              <Card.Text>
                Teléfono: {card.local_telefono}
              </Card.Text>
              
              </Card.Body>
              </Card>
              </Col>
        )
      }


  return (

/* función del componente Farmacias.jsx */
    <div className=" m-1 text-center pt-4">
        <h2>Farmacias de turno hoy</h2>
        <Container fluid className=" pt-3">
          <Row className="d-flex align-items-stretch">
           {/* mostramos todos los resultados que guardamos anteriormente, con map se llama a la función renderCard para cada objeto del array.
           si el array dentro de info se encuentra vacío, se mostrará el string 'cargando' mientras se espera la respuesta de la API*/}
           {props.info.length === 0 ? <h3>Cargando...</h3> : 
           props.info.map(renderCard) 
    
  }
            </Row>
        </Container>
    </div>
  )
}

export default Farmacias