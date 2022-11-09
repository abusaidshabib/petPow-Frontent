import React, { useContext } from 'react';
import { Button, CardImg, Carousel, Container, Form, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaUserAlt } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SIngleServices.css';

const SingleServices = () => {
    const { user } = useContext(AuthContext);
    const { title, details, image, index, _id } = useLoaderData();

    const handleSubmitReview = event => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;

        const sendreview = {
            auth_img: user.photoURL,
            uid: _id,
            email: user.email,
            review: review
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(sendreview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast("Review Send Successfully");
                    form.reset();
                }
            })
            .catch(error => console.error(error));

    }

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


            {
                user?.uid ?
                    <>
                        <Form onSubmit={handleSubmitReview} className="py-5">
                            <p className='display-5 fw-semibold'>Add your Review Here</p>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Enter Your review</Form.Label>
                                <textarea className='form-control w-100' rows="4" cols="" type="text" name='review' placeholder="Your Review" required></textarea>
                            </Form.Group>

                            <Button className='w-100' variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>

                    </>
                    :
                    <>
                        Please <Link to='/login'>Log In</Link> to add a review
                    </>
            }
            <ToastContainer />
        </Container>
    );
};

export default SingleServices;