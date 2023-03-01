
import React from 'react';
import { Card, Form } from 'react-bootstrap';


function FiltrosBusqueda(props) {

  //capturamos el valor del menu dropdown, para ordenar los resultados por región
  const capturarDropdown = (e) => {
    e.preventDefault();
    props.setValorSelect(e.target.value);
  }

  //Capturamos el valor del segundo dropdown, para ordenar los resultados alfabeticamente por comuna
  const capturarDropdown2 = (e) => {
    e.preventDefault();
    props.setValorSelect2(e.target.value);
  }

  const capturarInput = (e) => {
    e.preventDefault();
    props.setValorInput(e.target.value);
  }

  return (
    <Card className='p-3 m-3 bg-light text-dark sticky-top'>
      <Form >
        <fieldset>
          <Form.Group className="mb-3" >
            <Form.Label htmlFor="Select">Seleccione su región</Form.Label>
            <Form.Select id="Select" onChange={capturarDropdown}>
              <option value={''}>Todas las regiones</option>
              {/* Los valores de los value corresponden al codigo de fk_región de la API de farmacias de turno */}
              <option value={"1"}>Arica-Parinacota</option>
              <option value={"2"}>Tarapacá</option>
              <option value={"3"}>Antofagasta</option>
              <option value={"4"}>Atacama</option>
              <option value={"5"}>Coquimbo</option>
              <option value={"6"}>Valparaíso</option>
              <option value={"7"}>Metropolitana de Santiago</option>
              <option value={"8"}>O'Higgins</option>
              <option value={"9"}>Maule</option>
              {/* ñuble va antes del bio bio por orden territorial, a pesar que su valor sea 16 */}
              <option value={"16"}>Ñuble</option>
              <option value={"10"}>Bio bío</option>
              <option value={"11"}>Araucanía</option>
              <option value={"12"}>Los Ríos</option>
              <option value={"13"}>Los Lagos</option>
              <option value={"14"}>Aysén</option>
              <option value={"15"}>Magallanes y Antártica Chilena</option>
            </Form.Select>
            {/* Menu Dropdown para seleccionar cómo ordenar los resultados */}
            <Form.Label htmlFor="Select" className='pt-3'>Ordenar por comuna</Form.Label>
            <Form.Select id="Búsqueda" onChange={capturarDropdown2} >
              <option value={"asc"}>Orden alfabético A-Z</option>
              <option value={"des"}>Orden alfabético Z-A</option>
            </Form.Select>

            {/* input y boton de buscar para filtrar los resultados */}
            <Form.Group>
              <Form.Label htmlFor="input" className='pt-3'>Buscar por nombre de comuna</Form.Label>
              <Form.Control type="text" id="input" placeholder="Ingrese nombre de comuna" onChange={capturarInput} />

            </Form.Group>
          </Form.Group>
        </fieldset>
      </Form>
    </Card>
  );
}

export default FiltrosBusqueda;