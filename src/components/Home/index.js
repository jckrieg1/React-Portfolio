
import { Link } from 'react-router-dom';
import './index.scss';
import profilepic from './profile-pic.png'


const Home = () => {
return (
    <>
    <div className="container home-page">
        <div className="text-zone">
            <h1>Hello, <br /> I am 
            Joey Krieger
            <br />
            Web Developer
            </h1>
            <h2> example text </h2>
            <Link to="/contact" className="flat-button">Contact Me</Link>
        </div>
        {/* Begin About Me section */}
    </div>
    <div id='about-page' className="container about-page">
    <div className="text-zone">
        <h1>About Me</h1>
        <img src={profilepic} alt='profile-pic' />
            <p> sdfsdffsdfdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgfdfgdfgdfgdfgdfgdfgdfgdfgdfgfdg </p>
            <p> sdfsdffsdf </p>
            <p>sdgffsdfgdsf</p>
    </div>
   </div>
    
    </>
);
}



export default Home