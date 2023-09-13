import './Home.css'
import iconImage from '../public/js.png'
import iconImage1 from '../public/react.png'
import iconImage2 from '../public/mongodb.png'
import iconImage3 from '../public/nodejs.png'
import iconImage4 from '../public/express.png'
import iconImage5 from '../public/typescript.png'


const iconNames = [iconImage, iconImage5, iconImage1, iconImage2, iconImage3, iconImage4]

const Home = () => {
    return (
        <div className='home'>
            <h1>Seja bem-vindo ao meu portfólio!</h1>
            <p>Eu sou André, um desenvolvedor apaixonado por criar soluções.</p>
            <div className='icon-container'>
                {iconNames.map((icon, index) => (
                    <img key={index} src={icon} alt={`Ícone ${index}`} className='icon' />
                ))}
            </div>
        </div>
    );
};

export default Home;