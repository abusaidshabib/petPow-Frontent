import React, { useContext, useEffect, useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { AuthContext } from '../../Context/UserContext/UserContext';
import Card from 'react-bootstrap/Card';
import Reviews from './Reviews';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import useTitle from '../../hook/useTitle';

const MyReviews = () => {
    useTitle('myreviews')
    const { user } = useContext(AuthContext);
    const [review, setReview] = useState([]);

    // load reviews from the servers using emails
    useEffect(() => {
        fetch(`https://service-provider-server-seven.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email])

    // Delete data
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you wanna delete this review');
        if (proceed) {
            fetch(`https://service-provider-server-seven.vercel.app/reviews/${id}`, {
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
            {
                review.length > 0 ?
                    <div className='col-12 col-md-8'>
                        {
                            review.map(sreview => (
                                <Reviews key={sreview._id}
                                    sreview={sreview}
                                    handleDelete={handleDelete}
                                ></Reviews>
                            ))
                        }
                    </div>
                    :
                    <div className='col-12 col-md-8 text-center'>
                        <p className='display-6 fw-bold'>No reviews were added</p>
                    </div>
            }
            <ToastContainer />
        </div>

    );
};

export default MyReviews;