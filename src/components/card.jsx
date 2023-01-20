import { useState } from 'react';
import { Card, Button, Col } from "react-bootstrap";
import ModalR from "./modal";

  //prep para los modals
 


function CardR(props) {
    const { farmacias } = props;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <Col className="d-flex align-items-stretch col-sm-4 col-xl-3 col-xxl-2 pt-4">
          <Card key={farmacias.local_direccion} className="bg-secondary w-100">
            <Card.Body>
              <Card.Title>{farmacias.local_nombre}</Card.Title>
              <Card.Text>
                Comuna de {farmacias.comuna_nombre}
              </Card.Text>
              
              <Button variant="primary" onClick={handleShow} >
        Ver más
      </Button> 
      <ModalR show={show} close={handleClose} farmacias={farmacias} setShow={setShow} />
            </Card.Body>
          </Card>
        </Col>
  );
}

export default CardR;
