import React from 'react'
import { Modal, Form, Row, Col, Button} from 'react-bootstrap'
import "./Popup.css";
const Popup = (props) => {
    return (
        <>
        <Modal
      show={props.show}
      onHide={()=>{props.change(false)}}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter" className="mx-auto">
          Message me directly!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <Form onSubmit="">
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="full-name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Full Name"></Form.Control>
            </Form.Group>
            </Col>
            <Col>
            <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email Address"></Form.Control>
            </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col><Form.Group controlId="message"><Form.Label>Message</Form.Label><Form.Control as="textarea" placeholder="Message" rows={4}></Form.Control></Form.Group></Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
            <Button className="mx-1" variant="secondary" type="reset">
              Reset
            </Button>
            <Button className="mx-1" variant="primary" type="submit">
              Submit
            </Button>
            </Col>
          </Row>

       
        </Form>
       
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
        </>
    )
}

export default Popup;
