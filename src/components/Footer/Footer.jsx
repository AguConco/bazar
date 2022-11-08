import { Link } from 'react-router-dom'
import './Footer.css'
import Categoria from '../NavBar/Categoria'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () =>( 
    <footer>
        <div>
            <p className="infoFooter">
                A pesar del máximo esfuerzo para actualizar los datos,
                no nos hacemos responsables por inexactitudes,
                errores de precios o tipográficos.
                Los precios pueden variar sin previo aviso.
            </p>
            <div className="logoFooter"><Link to={"/"}><img src="./pictures/Logo2-n.svg" alt=""/></Link></div>
            <div className="redirects">
                <div>
                    <h3>Categorías</h3>
                    <ul><Categoria /></ul>
                </div>
                <div>
                    <h3>Ayuda</h3>
                    <ul><li><Link to={"/"}>Ayuda</Link></li></ul>
                </div>
                <div >
                    <h3>contacto</h3>
                    <ul>
                        <li><a href="https://web.whatsapp.com/send?text=Hola!&amp;phone=+543492575002" target="new"><i className="fab fa-whatsapp"></i></a></li>
                        <li><a href="https://www.instagram.com/bazar_regaleria/" target="new"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="https://www.facebook.com/bazar.regaleriaa/" target="new"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="mailto:bazarregaleriarafaela@gmail.com"><FontAwesomeIcon icon={faEnvelope}/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer