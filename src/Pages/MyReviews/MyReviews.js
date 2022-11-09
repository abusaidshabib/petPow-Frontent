import React, { useContext, useEffect, useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa';
import { AuthContext } from '../../Context/UserContext/UserContext';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])


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
                    <div>
                        {/* {
                            reviews.map(review => <div key={review._id}>demo</div>)
                        } */}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default MyReviews;