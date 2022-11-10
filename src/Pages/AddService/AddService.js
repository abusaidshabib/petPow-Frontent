import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../hook/useTitle';

const AddService = () => {
    useTitle("addservice");
    const [size, setSize] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
            .then(data => setSize(data.length))
    }, [])

    const handleSubmitService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const url = form.url.value;
        const details = form.details.value;
        const price = form.price.value;
        const index = `${size + 1}`;


        const oneservice = {
            image: url,
            index,
            title,
            details,
            price
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(oneservice)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast("Service Added Successfully");
                    form.reset();   
                }
                })
            .catch(error => console.error(error));
    }

    return (
        <div>
            <Container className='py-5'>
                <h1>Fill the form to add services</h1>
                <Form onSubmit={handleSubmitService}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Service Title</Form.Label>
                        <Form.Control name='title' type="text" placeholder="Service Title" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Service Image URL</Form.Label>
                        <Form.Control name='url' type="url" placeholder="Service Image URL" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Service Details</Form.Label>
                        <textarea className='form-control w-100' rows="4" cols="" type="text" name='details' placeholder="Service Details" required></textarea>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Set Price of Service</Form.Label>
                        <Form.Control name='price' type="number" placeholder="Service Price" required />
                    </Form.Group>

                    <Button className='w-100' variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
            <ToastContainer />
        </div>
    );
};

export default AddService;