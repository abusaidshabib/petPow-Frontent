import React, { useContext, useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { AuthContext } from '../../Context/UserContext/UserContext';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='row p-md-5'>
            <div className='col-12 col-md-4'>
                <Card className="text-center">
                    <Card.Header>Author</Card.Header>
                    <span className='pt-md-3'>
                        {
                            user?.photoURL ?
                                <>

                                    <img src={user?.photoURL} className="rounded-circle w-25" alt="Author-Img" />
                                </>

                                :
                                <FaUserAlt />
                        }
                    </span>
                    <Card.Body>
                        <Card.Title>{user?.displayName}</Card.Title>
                        <Card.Text>
                            {user?.email}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className='col-12 col-md-8'>
                <div className='card text-center'>
                    <div className="card-header">
                        Review of = <b>This dynamic service</b>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyReviews;