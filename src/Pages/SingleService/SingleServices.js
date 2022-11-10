import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, CardImg, Carousel, Container, Form } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SIngleServices.css';
import { FaUserAlt } from 'react-icons/fa';

const SingleServices = () => {
    const { user } = useContext(AuthContext);
    const [review, setReview] = useState([]);
    const { title, details, image, index, _id, } = useLoaderData();


    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [_id])

    const handleSubmitReview = event => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;

        const sendreview = {
            auth_img: user.photoURL,
            sid: _id,
            email: user.email,
            name: user.displayName,
            review: review,
            title
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
            <Carousel className='mb-5 bg-dark text-white'>
                {
                    review.map(sreview => (<Carousel.Item key={sreview._id}>
                        <div className='row m-md-5 align-items-center'>
                            <div className='col-md-4 text-end'>
                                {
                                    sreview?.auth_img?
                                    <img className='rounded-circle' src={sreview.auth_img} alt=" " />
                                    :
                                    <FaUserAlt/>
                                }
                            </div>
                            <div className='col'>
                                <Card className='border-0'>
                                    <Card.Body className='bg-dark text-white'>
                                        <Card.Title>{sreview.name}</Card.Title>
                                        <Card.Text>
                                            {
                                                sreview.review
                                            }
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </Carousel.Item>))
                }
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