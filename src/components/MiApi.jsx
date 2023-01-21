//importa el usestate y useffect
import React, { useEffect, useState } from "react";
//importa el componente de bootstrap de contenedor y card
import { Container, Card, Row, Col, Button, Modal } from "react-bootstrap";
import CardR from "./CardR";


//funcion de componente farmacias
function Farmacias(props) {



  //Llamamos a la funcion que consume la API al momento de cargar o "montar" el componente utilizando el hook useEffect
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
    //retornamos resultado para que sea guardado en el estado info
    props.setInfo(resultado);
  }

  const renderCard = (card) => {
    //la condicion filtrará los resultados alfabeticamente en orden A-Z, tambien en caso de que el valor sea vacio, para la carga inicial
    if (props.valorSelect2 === 'asc' || props.valorSelect2 === '') {
      props.setInfo(props.info.sort((a, b) => (a.comuna_nombre > b.comuna_nombre) ? 1 : -1));
    }
    else if (props.valorSelect2 === 'des') {
      props.setInfo(props.info.sort((a, b) => (a.comuna_nombre > b.comuna_nombre) ? 1 : -1).reverse());
    }
    //la condición filtrará las farmacias de acuerdo al valor del menú dropdown 1, según la región
    //la segunda parte de la condicion filtra las farmacias de acuerdo al valor del input, si corresponden con el valor dentro de alguna comuna
    if (card.fk_region === props.valorSelect && card.comuna_nombre.toLowerCase().includes(props.valorInput.toLowerCase())
    )
      return (
        /* Se llama al componente card */
        <CardR farmacias={card} />
      )
    //esta condición mostrará todas las farmacias cuando el valor del menú dropdown 1 sea vacío
    //la segunda parte de la condicion filtra las farmacias de acuerdo al valor del input, si corresponden con el valor dentro de alguna comuna
    else if (props.valorSelect === '' && card.comuna_nombre.toLowerCase().includes(props.valorInput.toLowerCase())
    )
      return (
        /* Se llama al componente */
        <CardR farmacias={card} />
      )
  }


  return (
    /* función del componente Farmacias.jsx */
    <div className=" m-1 text-center pt-4">
      <div className="text-center">
        <h2>Farmacias de turno hoy</h2>
      </div>
      <Container fluid className=" pt-3">
        <Row className="d-flex align-items-stretch">
          {/* mostramos todos los resultados que guardamos anteriormente, con map se llama a la función renderCard para cada objeto del array.
           si el array dentro de info se encuentra vacío, se mostrará el string 'cargando' mientras se espera la respuesta de la API*/}
          {props.info.length === 0 ? <h3>Cargando...</h3> :
            /* Se mapea el arreglo y se llama a renderCard para aplicar los filtros y renderizar las card */
            props.info.map(renderCard)
          }
        </Row>
      </Container>
    </div>
  )
}

export default Farmacias