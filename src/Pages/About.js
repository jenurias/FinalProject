import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "../Styles/About.css";


function About() {
    return (
      <div className="about">
        <section> 
          <div className="aboutBottom">
              <h1> About Us</h1>
              <p>
                  Welcome to Squeaky Clean Pet Grooming Salon. We are a family owned grooming salon doing business in the greater Phoenix area since 1998. Our team shares a passion for pets, focusing on serving the clients and pet guests alike. We have taken the time to create a safe, comfortable and fun environment to ensure your pet has a wonderful experience at the salon. 
              </p>
              <p>
                  Pets are family and we treat every client and their pet as such. We measure our success by the happiness of the pets and the owners that walk through our doors daily. For us, we strive at being attentive and responsive to the needs of pets and wishes of their owners. So long as we see a smile on your face and a wagging tale, we know we’ve done a good job.     
              </p>
          </div>
        </section>
       
        <section className="section bg-c-light border-top">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-4 text-center">
                <h3 className="main-heading">See what our clients are saying about us!</h3>
              </div>
              <div className="col-md-4">
                <div className="card shadow">
                  <div className="card-body">
                    <h5>Pet's Name: Sampson</h5>
                    <p>We just love bringing our Sampson here. He enjoys playtime and cuddles before and after his grooming services. They really treat your pets like family.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow">
                  <div className="card-body rounded mb-2 w-30 mx-auto">
                    <h5>Pet's Name: Rudy</h5>
                    <p>Rudy always leaves Squeaky Clean with happy tail wags every time. He loves his groomer, Sonya. </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow">
                  <div className="card-body">
                    <h5>Pet's Name: Bella</h5>
                    <p>Recently moved from out of town and I'm glad we found Squeaky Clean Groomers. Bella is treated like royalty, just like the princess she is.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 offset-md-3">
                <div className="card shadow">
                  <div className="card-body">
                    <h4>Leave A Review</h4>
                    <Form>
                      <Row>
                        <Col>
                          <Form.Label>Pet's Name</Form.Label>
                          <Form.Control placeholder="Pet's Name" />
                        </Col>
                      </Row>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlTextare1">
                        <Form.Label > Comment </Form.Label>
                        <Form.Control as="textarea" placeholder="Review Details" rows={5} />
                      </Form.Group>
                      <Button type="submit" variant="outline-info shadow w-100"> Submit Review </Button>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> 
      </div>
    );
  }
  
  export default About;