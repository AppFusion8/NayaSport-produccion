import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import React from 'react';
import { Socialmedia } from '../../Models/SocialMedia';
import Title from '../Globals/Title/Title';
import './Contact.css';

function ContactForm() {
    return (
        <section class='contact'>
            <article class="contact-form-container">
                <Title title="CONTÁCTANOS" />
                <form className="contact-form" action="https://formsubmit.co/354adf7ac3f23e98449f4f9c828f01f9" method="post">
                    <input required name='Nombre' type="text" placeholder="Nombre" />
                    <input required name='Apellido' type="text" placeholder="Apellido" />
                    <input required name="correo" type='email' placeholder='Correo' />
                    <input required name="celular" type='tel' placeholder='Celular' />

                    <textarea cols="50" rows="10" name='mensaje' placeholder="Escribe tu mensaje"></textarea>
                    <input type="hidden" name="_autoresponse" value="Gracias por comunicarte con nosotros, nos contactaremos lo más pronto posible"></input>

                    <button class="contact-form-button" type="hidden" name="_next" value="https://nayasport.com.co/">
                        Enviar
                    </button>
                </form>
            </article>
            <article class="contact-socialmedia-container">
                <Title title="INFORMACIÓN" />
                <div class="contact-socialmedia">
                    <FacebookOutlinedIcon />
                    <a target='_blank' href={Socialmedia.Facebook}>
                        {Socialmedia.Facebook}
                    </a>
                </div>
                <div class="contact-socialmedia">
                    <MailOutlineIcon />
                    <a target='_blank' href={`mailto:${Socialmedia.email}`}>
                        {Socialmedia.email}
                    </a>
                </div>
                <div class="contact-socialmedia">
                    <InstagramIcon />
                    <a target='_blank' href={Socialmedia.Instagram}>
                        {Socialmedia.Instagram}
                    </a>
                </div>
                <iframe className='contact-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.6519014265687!2d-74.0711815!3d4.656015399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a4dfd5209eb%3A0x80cf288d266a8401!2sCl.%2064%20%2323-28%2C%20Barrios%20Unidos%2C%20Bogot%C3%A1!5e0!3m2!1ses-419!2sco!4v1721231904280!5m2!1ses-419!2sco" loading="lazy" width="300" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </article>
        </section>
    )
}

export default ContactForm