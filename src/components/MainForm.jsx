import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {  Card } from 'react-bootstrap';
import React from 'react';
import { useState } from 'react';

function FormDropdown(props) {

//capturamos el valor del menu dropdown
const capturarDropdown = (e) => {
    e.preventDefault();
    props.setValorSelect(e.target.value);
    console.log(e.target.value + ' target value MainForm');
  }

  return (
    <Card className='p-3 m-3 bg-secondary'>
    <Form >
      <fieldset>
        <Form.Group className="mb-3" >
          <Form.Label htmlFor="Select">Seleccione su región</Form.Label>
          <Form.Select id="Select"  onChange={capturarDropdown}>
            <option value={''}>Seleccione su región</option>
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
        </Form.Group>
      </fieldset>
    </Form>
    </Card>
  );
}

export default FormDropdown;