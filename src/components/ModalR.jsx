import React from 'react';
import { Modal, Button } from "react-bootstrap";


//Funcion para generar dinamicamente los menú modals

const ModalR = (props) => {
    const { farmacias } = props;
    //definimos la funcion para cerrar el modal, el cual cambiará el estado de show a false en el componente padre
    const handleClose = () => props.setShow(false);
    return (
        <Modal key={farmacias.local_direccion} show={props.show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {farmacias.local_nombre}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Comuna de {farmacias.comuna_nombre}</p>
                <p>Dirección: {farmacias.local_direccion}</p>
                <p>Teléfono: {farmacias.local_telefono}</p>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalR