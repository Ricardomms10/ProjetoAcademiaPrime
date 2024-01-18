import Image from "next/image";
import atleta from '../../../public/assests/images/atleta.png';
import styles from './unidades.module.scss'


export default function Unidades() {

    return (
        <div className={styles.container}>
            <div className={styles.boxText}>
                <h1>
                    Vem ser<br /> Prime
                </h1>

                <p>
                    Vem treinar na melhor rede de academias. <br />
                    experience que só a Prime pode ter fornece!
                </p>

                <button>
                    NOSSAS UNIDADES
                </button>
            </div>
            
                <Image
                    className={styles.img}
                    alt="atleta"
                    src={atleta}
                    width='auto'
                    height={500}
                />
            
        </div>
    )
}