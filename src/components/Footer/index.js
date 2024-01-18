import Image from "next/image";
import logo from '../../../public/assests/images/logo.png'
import styles from './footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {

    return (
        <div className={styles.container}>
            <Image
                alt="logo"
                src={logo}
                className={styles.img}
            />
            <span className={styles.divisor}></span>
            <div className={styles.boxText}>
                <h2>Siga a Prime</h2>
                <div>
                    <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
                    <FontAwesomeIcon icon={faFacebookSquare} className={styles.icon} />
                    <FontAwesomeIcon icon={faYoutube} className={styles.icon} />
                    <FontAwesomeIcon icon={faTiktok} className={styles.icon} />
                </div>
            </div>
            <span className={styles.divisor}></span>
            <div className={styles.boxList }>
                <ul>
                    <h1>Institucional</h1>
                    <li>Sobre</li>
                    <li>Conceito</li>
                    <li>Academias</li>
                    <li>Blog</li>
                </ul>

                <ul>
                    <h1>Planos</h1>
                    <li>Planos</li>
                    <li>Contratos</li>
                    <li>Planos corporativos</li>
                    <li>Prime Fit Sup</li>
                </ul>

                <ul>
                    <h1>Corporativo</h1>
                    <li>Imprensa</li>
                    <li>Quero ser um Franquiado</li>
                    <li>Trabalhe conosco</li>

                </ul>

            </div>
            <span className={styles.divisor}></span>

            <p>Feito por <span>Ricardo Malta</span></p> 
        </div>
    )
}