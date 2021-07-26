import { Modal, Form, Row, Col, Button, Collapse} from 'react-bootstrap'
import "./Popup.css";
import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import { Redirect } from 'react-router';


export default class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valid : false,
      redirect: false,
      email : '',
      fullname: '',
      msg: ''
    }
    this.formRef = React.createRef();
  }
  handleChange = (event) => {
    console.log('changed');
    switch(event.target.id) {
      case 'email':
        this.setState({
          email: event.target.value
        })
        break;
      case 'fullname':
        this.setState({
          fullname: event.target.value
        })
        break;
      case 'msg':
        this.setState({
          msg: event.target.value
        })
        break;
      default: 
        console.error('invalid call to change function');
        break;
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    emailjs.sendForm('default_service', 'template_b5m12iw', this.formRef.current, 'user_PpLoVom5G6qUbqYNNYY4a').then((res)=>{console.log(res.status)}, (err) => {console.log(err)});
    this.setState({
      valid: true,
    });
    setTimeout(()=>{
      this.setState({
        redirect: true,
      }); this.props.change(false);
    },1000);
  }
  handleReset = () => {
    console.log('called');
    this.setState({
      email : '',
      fullname: '',
      msg: '',
    })
  }  
  render() {
    return (
      <>
        <Modal
      show={this.props.show}
      onHide={()=>{this.props.change(false)}}
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
       <Form ref={this.formRef} onSubmit={this.handleSubmit}>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="fullname">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" name="from_name" placeholder="Full Name" value={this.state.fullname} onChange={this.handleChange} required></Form.Control>
            </Form.Group>
            </Col>
            <Col>
            <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="from_email" placeholder="Email Address" value={this.state.email} onChange={this.handleChange}  required></Form.Control>
            </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col><Form.Group controlId="msg"><Form.Label>Message</Form.Label><Form.Control as="textarea" name="message" placeholder="Message" rows={4} value={this.state.msg} onChange={this.handleChange}  required></Form.Control></Form.Group></Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
            <Button className="mx-1" variant="secondary" type="reset" onClick={this.handleReset}>
              Reset
            </Button>
            <Button className="mx-1" variant="primary" type="submit">
              Submit
            </Button>
            </Col>
          </Row>
        </Form>
       
      </Modal.Body>
      <Collapse in={this.state.valid}>
      <Modal.Footer>
        <div className="text-success fw-bold">Success! Mail Sent.</div>
      </Modal.Footer>
      </Collapse>
    </Modal>
    {this.state.redirect ? <Redirect to={'/projects'}/>: null}
        </>
    )
  }
}

