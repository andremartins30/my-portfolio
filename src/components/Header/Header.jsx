import { Link } from 'react-router-dom';
import './Header.css'; // Importe os estilos

const Header = () => {
    return (
        <header className="header">
            <nav className="links">
                <div className='homepage'>
                    <Link to="/">André Martins Dev</Link>
                </div>
                <div className='sobre-contato'>
                    <Link to='/'>Home</Link>
                    <Link to='/sobre'>Sobre mim</Link>
                    <Link to="/contato">Contato</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
