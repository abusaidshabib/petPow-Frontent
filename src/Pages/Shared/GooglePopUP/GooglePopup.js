import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Button, Col } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext/UserContext';

const GooglePopup = () => {

    const { googlePopUp,user } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    const handleGPopUp = () => {
        googlePopUp(googleProvider)
        .then(result => {
            result = result.user;
            navigate(from, {replace: true});
        })
        .catch(error => console.error(error));
    }

    return (
        <Col className='py-5 text-center'>
            <Button onClick={handleGPopUp}>Sign In With Google</Button>
            <br/> <br/> <br/>
            {
                user?.uid?
                <Link to="/"><Button>Go to HomePage</Button></Link>
                :
                <Link to="/register"><Button>Go to Register Page</Button></Link>
            }

        </Col>
    );
};

export default GooglePopup;