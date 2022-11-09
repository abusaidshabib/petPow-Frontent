import React, { useContext } from 'react';
import { CardImg, Carousel, Container, Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaUserAlt } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext/UserContext';
import './SIngleServices.css'

const SingleServices = () => {
    const { user } = useContext(AuthContext);
    const {title, details,image, index} = useLoaderData();

    return (
        <Container>
            <Card>
                <Card.Header as="h5">Service Number: {index}</Card.Header>
                <Card.Body>
                    <CardImg className='card-img' src={image}></CardImg>
                    <Card.Title className='display-2 fw-bold'>{title}</Card.Title>
                    <Card.Text className='fs-4 fw-normal'>
                        {details}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Carousel className='mb-5'>
                <Carousel.Item>
                    <div className="row align-items-center bg-warning py-5">
                        <div className="col text-center">
                            {
                                user?.uid ?
                                    <Image className='border border-5' roundedCircle src={user.photoURL}></Image>
                                    :
                                    <FaUserAlt></FaUserAlt>
                            }
                        </div>
                        <div className="col">
                            {
                                user?.uid ?
                                    <>
                                    <p>{user.displayName}</p>
                                    <p>Reviews</p>
                                    </>
                                    :
                                    <p>Review Not Available</p>
                            }
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default SingleServices;