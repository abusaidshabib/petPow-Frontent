import React, { useContext, useEffect, useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { AuthContext } from '../../Context/UserContext/UserContext';
import Card from 'react-bootstrap/Card';
import Reviews from './Reviews';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you wanna delete this review');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast("deleted successfully");
                        const remaining = review.filter(rev => rev._id !== id);
                        setReview(remaining);
                    }
                })
        }
    }

    const handleUpdate = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved' }),
        })
    }
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
                    {
                        review.map(sreview => (
                            <Reviews key={sreview._id}
                                sreview={sreview}
                                handleDelete={handleDelete}
                                handleUpdate = {handleUpdate}
                            ></Reviews>
                        ))
                    }
                </div>
                <ToastContainer />
            </div>

        );
    };

    export default MyReviews;