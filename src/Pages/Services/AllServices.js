import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';

const AllServices = () => {
    const services = useLoaderData();
    return (
        <PhotoProvider>
            <Container className='py-5'>
                <p className='display-4 fw-bold text-center py-5'>Services</p>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
                    {
                        services.map(service => <Col className='text-center col pb-4' key={service.index}>
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
                        </Col>)
                    }
                </div>
            </Container>
        </PhotoProvider>
    );
};

export default AllServices;