import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const Reviews = ({ sreview, handleDelete }) => {
    const { title, review, _id } = sreview;
    return (
        <div>
            <div className="pb-md-5">
                <div className='card text-center'>
                    <div className="card-body">
                        <h5 className="card-title">Name of service: {title}</h5>
                        <p className="card-text"><b>My review: </b>{review}</p>
                    </div>
                    <Row className='py-md-3'>
                        <Col>
                        </Col>
                        <Col>
                            <Button onClick={() => handleDelete(_id)} variant='primary'> Delete</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Reviews;