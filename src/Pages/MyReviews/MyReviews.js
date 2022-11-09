import React, { useContext } from 'react';
import { Container, Image } from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext/UserContext';

const MyReviews = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className='py-lg-5 py-md-4'>
            <Container>
                <div className="row g-0 text-center">
                    <div className="col-12 col-md-4 py-5">
                        {
                            user?.photoURL ?
                                <Image className='border border-5' roundedCircle src={user.photoURL}></Image>
                                :
                                <FaUserAlt></FaUserAlt>
                        }
                        <br />
                        <br />
                        {
                            user?.displayName ?
                                <h3>{user.displayName}</h3>
                                :
                                <h3>No UserName here</h3>
                        }
                        {
                            user?.email ?
                                <h5>{user.email}</h5>
                                :
                                <h5>No email here</h5>
                        }

                    </div>
                    <div className="col-12 col-md-8">
                        <h1 className='fw-bold display-6'>Reviews</h1>
                        <br/>
                        <div className="card border-0 bg-transparent">
                            <div className="card-body">
                                <h5 className="card-title">Service Title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card Number</h6>
                                <p className="card-text">Customer review</p>
                                <Link className='card-link'>Delete</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default MyReviews;