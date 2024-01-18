import Image from "next/image";
import planos from '../../../public/assests/images/planos.jpg'
import styles from './planos.module.scss'

export default function Planos() {

    return(
        <div className={styles.container}>
            <Image 
            className={styles.img}
            alt="tabela de planos"
            src={planos}
            
            />
        </div>
    )
}