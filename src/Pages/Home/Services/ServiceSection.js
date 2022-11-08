import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const ServiceSection = () => {
    return (
        <Container className='py-5'>
            <p className='display-4 fw-bold text-center'>Services</p>
            <Row>
                <Col className='text-center col-lg-4'>
                <Card style={{ width: '30%vw' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Link><Button variant="primary">Add Now</Button></Link>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ServiceSection;