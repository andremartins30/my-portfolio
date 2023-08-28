import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <div className='contact'>
            <h1>Contato</h1>
            <p>Entre em contato comigo através dos seguintes meios:</p>
            <ul>
                <li>Email: andre.martins30@hotmail.com</li>

                <li>Telefone: +55 65 99284-1362</li>

                <li>
                    <a href='https://www.linkedin.com/in/andremartins30/' target='_blank' rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>

            </ul>
        </div>
    );
};

export default Contact;