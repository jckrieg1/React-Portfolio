import './index.scss'
import { Link, NavLink } from 'react-router-dom';
// Import Logo (placeholder image):
import logo from './logo.jpg'
 
// Import Icons for Nav Bar:
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser, faBookOpen, } from '@fortawesome/free-solid-svg-icons';



const Sidebar = () => {
return (
    <> 
        <div className='nav-bar'>
            
            <Link className='logo' to='/' >
                <img src={logo} alt='Logo' />
            </Link>

            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    {/* Icons */}
                    <FontAwesomeIcon icon={faHome} color="4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    {/* Icons */}
                    <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" />
                </NavLink>

                  <NavLink exact="true" activeclassname="active" className="about-link" to="#about-page">
                    {/* Icons */}
                     <FontAwesomeIcon icon={faUser} color="4d4d4e" />
                 </NavLink> 

                <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
                    {/* Icons */}
                    <FontAwesomeIcon icon={faBookOpen} color="4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="resume-link" to="/resume">
                    {/* Icons */}
                    <FontAwesomeIcon icon={faUser} color="4d4d4e" />
                </NavLink>
                
                    
            </nav>
           
           <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com">LinkedIn</a>
               
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.https://github.com/jckrieg1.com">GitHub</a>
            </li>
           </ul>
             
        </div>
    </>
)}

export default Sidebar;


