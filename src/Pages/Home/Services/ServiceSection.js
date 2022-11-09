import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "./ServiceSection.css";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const ServiceSection = ({ services }) => {
    return (
        <PhotoProvider>
            <Container className='py-5'>
                <p className='display-4 fw-bold text-center py-5'>Services</p>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
                    {
                        services.map((service, dex) => dex < 3 && (<Col className='text-center col pb-4' key={service.index}>
                            <Card style={{ width: '30%vw' }}>
                                <PhotoView src={service.image}>
                                    <img className='card-img-top img-fluid image-resize' src={service.image} alt="" />
                                </PhotoView>
                                <Card.Body>
                                    <Card.Title><h3>{service.title}</h3></Card.Title>
                                    <Card.Text>
                                        {service.details.slice(0, 80)}...
                                        <span className='text-end'>
                                            <Link to={`/service/${service._id}`}>More Details</Link>
                                        </span>
                                    </Card.Text>
                                </Card.Body>

                            </Card>
                        </Col>))
                    }
                </div>
                <div className='text-end'>
                    <Link to="/services">
                        <Button>Click for more services</Button>
                    </Link>
                </div>
            </Container>

        </PhotoProvider>
    );
};

export default ServiceSection;