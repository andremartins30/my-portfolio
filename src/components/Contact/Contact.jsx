import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <div className='contact'>
            <h1>Contato</h1>
            <p>Entre em contato comigo através dos seguintes meios:</p>
            <ul>
                <li>Email: andre.martins30@hotmail.com</li>

                
                <li>
                    <a href='https://www.linkedin.com/in/andremartins30/' target='_blank' rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/andremartins30" target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://wa.me/5565992841362" target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                </li>

            </ul>
        </div>
    );
};

export default Contact;