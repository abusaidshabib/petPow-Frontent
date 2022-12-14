import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext/UserContext';
import useTitle from '../../hook/useTitle';
import GooglePopup from '../Shared/GooglePopUP/GooglePopup';

const Register = () => {
    useTitle('register')
    const { regUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleReg = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        regUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
            })

    }

    return (
        <Container className='py-5'>
            <div className="row row-cols-1 row-cols-lg-2">
                <div className="col">
                    <div className="p-3">
                        <GooglePopup></GooglePopup>
                    </div>
                </div>
                <div className="col">
                    <p className='display-4 fw-bold text-center py-5'>Register Form</p>
                    <div className="p-3">
                        <Form onSubmit={handleReg} className='lead pb-lg-2'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name='email' type="email" placeholder="Your Email Address" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name='password' type="password" placeholder="Your Password" required />
                            </Form.Group>
                            <div className='text-end'>
                                <Button className='lead pb-lg-2 fw-bold w-100' variant="primary" type="submit">
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Register;