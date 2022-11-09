import React, { useContext } from 'react';
import { Carousel, Container, Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaUserAlt } from 'react-icons/fa';
import { AuthContext } from '../../Context/UserContext/UserContext';

const SingleServices = () => {
    const { user } = useContext(AuthContext);
    console.log(user);

    return (
        <Container>
            <Card>
                <Card.Header as="h5">Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
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
                                    <>Review Not Available</>
                            }
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default SingleServices;