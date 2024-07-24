import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/LogoNaya.png';
import { pathRoutes } from '../../../routes/PathRoutes';
import './Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return (
        <footer>
            <section className='footer-top'>
                <article className='footer-top-logo'>
                    <img src={Logo} alt='logo' />
                </article>

                <article className='footer-top-menu'>
                   
                        <ul>
                            <li className='list-title'>Menú</li>
                            <li><Link className='list-title-li' to={pathRoutes.home}>Inicio</Link></li>
                            <li><Link className='list-title-li' to={pathRoutes.uniforms}>Uniformes</Link></li>
                            <li><Link className='list-title-li' to={pathRoutes.contact}>Contáctanos</Link></li>
                            <li><Link className='list-title-li' to={pathRoutes.customers}>Preguntas frecuentes</Link></li>
                        </ul>

                        <ul>
                            <li className='list-title'>Contacto</li>
                            <li>Cel: <a className='list-title-li' href='tel:3174703402'>+57 317 4703402</a></li>
                            <li><a className='list-title-li' href='mailto:naya.sports@gmail.com'>naya.sports@gmail.com</a></li>
                        </ul>

                        <ul>
                            <li className='list-title'>Sedes</li>
                            <li>Calle 64 #23 - 28 Barrio 7 de agosto Bogotá</li>
                            <li>CALLE 3 #12-26 , Curumaní, Colombia</li>
                        </ul>
                   

                </article>
            </section>
            <section className='footer-bottom'>
                <article className='footer-bottom-naya'>
                    <p>
                        <span className='footer-bottom-name'>NayaSport 2024 | </span>
                        <Link className='footer-bottom-link' to={pathRoutes.privacy}> Términos y condiciones</Link>
                    </p>
                </article>
                <article className='footer-bottom-social'>
                    <p> Siguenos : </p>
                    <a href='https://www.facebook.com/nayasport2017/?locale=es_LA'><FacebookOutlinedIcon className='social-icons' /></a>
                    <a href='https://www.instagram.com/nayasportuniformes/?hl=es'><InstagramIcon className='social-icons' /></a>

                </article>
            </section>
        </footer>
    )
}

export default Footer