import Image from "next/image";
import dance from '../../../public/assests/images/dance.jpg'
import jump from '../../../public/assests/images/jump.jpg'
import corrida from '../../../public/assests/images/corrida.jpg'
import styles from './aulas.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faFire } from '@fortawesome/free-solid-svg-icons';


export default function Aulas() {

    return (
        <div className={styles.container}>

            <h1>Aulas e treinos <span>exclusivos!</span></h1>

            <ul>
                <li>
                    <Image
                        alt="trienos"
                        src={dance}
                        width={450}
                        style={{ width: "100%", height: "auto" }}
                    />
                    <h2> FITDANCE </h2>
                    <div className={styles.boxText}>
                        <div>
                            <FontAwesomeIcon
                                icon={faClock}
                                className={styles.icon}
                            />
                            <p>Duração</p>
                            <span>30/45/60 min</span>
                        </div>
                        <div>
                            <FontAwesomeIcon
                                icon={faFire}
                                className={styles.icon}
                            />
                            <p>Intensidade</p>
                            <span>Alta</span>
                        </div>
                    </div>
                    <span className={styles.divisor}></span>
                    <div className={styles.boxFooter}>
                        <p>Para você manjar todos os passinhos, aulas de danças na Prime são ministradas por professores licenciados pelas FirDance.</p>
                        <button>Saiba mais</button>
                    </div>
                </li>

                <li>
                    <Image
                        alt="trienos"
                        src={jump}
                        width={450}
                        style={{ width: "100%", height: "auto" }}
                    />
                    <h2> JUMP </h2>
                    <div className={styles.boxText}>
                        <div>
                            <FontAwesomeIcon
                                icon={faClock}
                                className={styles.icon}
                            />
                            <p>Duração</p>
                            <span>30 min</span>
                        </div>
                        <div>
                            <FontAwesomeIcon
                                icon={faFire}
                                className={styles.icon}
                            />
                            <p>Intensidade</p>
                            <span>Alta</span>
                        </div>
                    </div>
                    <span className={styles.divisor}></span>
                    <div className={styles.boxFooter}>
                        <p>Emagrecimento com ganho de condiocionamento físico com jump. Essa é nossa aula de jump, nosso treino funcional coletivo de alta intensidade.</p>
                        <button>Saiba mais</button>
                    </div>
                </li>

                <li>
                    <Image
                        alt="trienos"
                        src={corrida}
                        width={450}
                        style={{ width: "100%", height: "auto" }}
                    />
                    <h2> SPINNING </h2>
                    <div className={styles.boxText}>
                        <div>
                            <FontAwesomeIcon
                                icon={faClock}
                                className={styles.icon}
                            />
                            <p>Duração</p>
                            <span>30 min</span>
                        </div>
                        <div>
                            <FontAwesomeIcon
                                icon={faFire}
                                className={styles.icon}
                            />
                            <p>Intensidade</p>
                            <span>Alta</span>
                        </div>
                    </div>
                    <span className={styles.divisor}></span>
                    <div className={styles.boxFooter}>
                        <p>Emagrecimento com ganho de condiocionamento físico com pedaladas. Esse é nosso spinning, nosso treino funcional coletivo de alta intensidade.</p>
                        <button>Saiba mais</button>
                    </div>
                </li>
            </ul>

        </div>
    )
}