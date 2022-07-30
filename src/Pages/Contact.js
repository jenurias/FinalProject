import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "../Styles/Contact.css";

function Contact() {
    return (
        <section className="contact">
            <h1> Contact us to schedule your appointment today!</h1>
        <div className="container">
            <div className="card shadow">
                <div className=" card-body">
                    <div className="row">
                        <div className="col-md-6">
                        <h3> Contact Form </h3>
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Label> Full Name </Form.Label>
                                        <Form.Control placeholder="First and Last Name" required/>
                                    </Col>
                                </Row>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label> Email Address </Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextare1">
                                    <Form.Label> Enter Message Details </Form.Label>
                                    <Form.Control as="textarea" rows={5} required/>
                                </Form.Group>
                                <Button type="submit" variant="outline-info shadow w-100"> Submit Form </Button>
                            </Form>
                        </div>
                        <div className="col-md-6 border-start">
                            <h3 className="main-heading2">Location Information</h3>
                            <br/>
                            <p>
                                Address:<br/>123 North Fake Road, Phoenix, AZ 85123
                            </p>
                            <p>
                                Phone Number:<br/> (602) 555-1234
                            </p>
                            <p>
                                Email:<br/> info@squeakycleangroomers.com 
                            </p>
                            <p>
                                Hours:<br/> Monday - Saturday 9:00 AM - 6:00 PM 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}

export default Contact; 