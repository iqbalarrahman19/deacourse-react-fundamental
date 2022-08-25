import React, { useState } from "react"
import { Modal, Card, Button } from "react-bootstrap"

const Modales = (props) => {
    const [centredModal, setcentredModal] = useState(false)
    const toggleshow = () => {
        setcentredModal(!centredModal)
    }
    return (
        <React.Fragment>
            <Card border="primary" style={{ width: '18rem', height: '12rem' }} className="mx-2 mb-2 mt-2">
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                </Card.Body>
                    <Button variant="primary" className="mb-3 d-flex justify-content-center" style={{ width: '80px'}} onClick={toggleshow}>Detail</Button>
            </Card>
            <Modal show={centredModal} setShow={setcentredModal} onClick={toggleshow}>
                <Modal.Header closeButton>
                <Modal.Title>Id : {props.id}</Modal.Title>
                </Modal.Header>
                <Modal.Body><h5>Judul : {props.title}</h5></Modal.Body>
                <Modal.Body>description : {props.description}</Modal.Body>
            </Modal>
        </React.Fragment>
    )
}
export default Modales