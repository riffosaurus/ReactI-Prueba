import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card } from 'react-bootstrap';
import React from 'react';
import { useState } from 'react';

function FormDropdown(props) {



//capturamos el valor del menu dropdown
const capturarDropdown = (e) => {
    e.preventDefault();
    props.setValorSelect(e.target.value);
    console.log(e.target.value);
  }



  return (
    <Card className='p-3 m-3 bg-secondary'>
    <Form >
      <fieldset>
        <Form.Group className="mb-3" >
          <Form.Label htmlFor="Select">Seleccione su ciudad</Form.Label>
          <Form.Select id="Select"  onChange={capturarDropdown}>
            <option value={''}>Seleccione una ciudad</option>
            <option value={"CONCEPCION"}>Concepción</option>
            <option value={"SANTIAGO"}>Santiago</option>
          </Form.Select>
        </Form.Group>
      </fieldset>
    </Form>
    </Card>
  );
}

export default FormDropdown;