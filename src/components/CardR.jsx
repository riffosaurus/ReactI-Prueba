import { useState } from 'react';
import { Card, Button, Col } from "react-bootstrap";
import ModalR from "./ModalR";

 


function CardR(props) {
    //Se define props como farmacias ya que trae el objeto de la API
    const { farmacias } = props;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <Col className="d-flex align-items-stretch col-sm-4 col-xl-3 col-xxl-2 pt-4">
          <Card key={farmacias.local_direccion} className="bg-light text-dark w-100">
            <Card.Body className='d-flex flex-column'>
              <Card.Title className='align-top mt-auto'>{farmacias.local_nombre}</Card.Title>
              <Card.Text className='align-center mt-auto'>
               {farmacias.comuna_nombre}
              </Card.Text>
              
              <Button className="align-bottom mt-auto" variant="primary" onClick={handleShow} >
        Ver más
      </Button> 
              
              
      <ModalR show={show} close={handleClose} farmacias={farmacias} setShow={setShow} />
            </Card.Body>
          </Card>
        </Col>
  );
}

export default CardR;
