import './Home.css';
import logo from '../assets/images/LOGO.svg';

function Home() {
return (
    <div className="home-container">

    <div className="hero-section">
        <div className="logo-card">
        <img src={logo} alt="AllPics Logo" className="logo-image" />
        <h2 className='logo-text'>AllPics</h2>
        </div>
        <p className="tagline">Captura, Comparte y Conecta con AllPics</p>
    </div>

    <footer className="subscription-section">
        <div className="subscription-card">
            <button className="arrow-button left">❮</button>
        <div className="subscription-content">
        <div className="subscription-icon">✔</div>
        <h2 className="subscription-title">Suscripción Básica</h2>
        <ul className="features-list">
            <li>- Publica imágenes más pesadas.</li>
            <li>- ¡Obtén tu propio ícono certificado!</li>
            <li>- Ingresa a opciones avanzadas.</li>
        </ul>
        </div>
            <button className="arrow-button right">❯</button>
        </div>
    </footer>
    </div>
);
}

export default Home;
