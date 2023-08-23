import { Link } from 'react-router-dom';
import './Header.css'; // Importe os estilos

const Header = () => {
    return (
        <header className="header">
            <nav className="links">
                <div className='homepage'>
                    <Link to="/">Meu Portfólio</Link>
                </div>
                <div className="contato">
                    <Link to="/contato">Contato</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
