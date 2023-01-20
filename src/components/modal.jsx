import React from 'react';
import { Modal, Button } from "react-bootstrap";




const ModalR = (props) => {
    const { farmacias } = props;
    const handleClose = () => props.setShow(false);
    return (
        <Modal key={farmacias.local_direccion} show={props.show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {farmacias.local_nombre}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{farmacias.local_direccion}</p>
                <p>Dirección: {farmacias.local_direccion}</p>
                <p>Teléfono: {farmacias.local_telefono}</p>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalR