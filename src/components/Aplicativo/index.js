import Image from "next/image";
import celular from '../../../public/assests/images/celular.png'
import styles from './aplicativo.module.scss'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Aplicativo() {

    return (
        <div className={styles.container}>
            <div className={styles.boxText}>
                <h1>
                    Baixe nosso app de treino e <br />acompanhe sua evolução <br />nos treinos.
                </h1>

                <ul>
                    <li>
                        <FontAwesomeIcon
                            icon={faCircleCheck}
                            className={styles.icon}
                        />
                        <p>Acompanhar o progresso de treino</p>
                    </li>
                    <li>
                        <FontAwesomeIcon
                            icon={faCircleCheck}
                            className={styles.icon}
                        />
                        <p>Ver os exercícios em vídeo</p>
                    </li>
                    <li>
                        <FontAwesomeIcon
                            icon={faCircleCheck}
                            className={styles.icon}
                        />
                        <p>Assistir às aulas on-line onde e quando quiser</p>
                    </li>
                </ul>

                <button>
                    APPSTORE
                </button>

                <button>
                    PLAYSTORE
                </button>
            </div>

        
                <Image
                    alt="imagem celular"
                    src={celular}
                    className={styles.img}
                    width={500}
                    height='auto'
                />
            
        </div>
    )
}