import Image from "next/image";
import cartoes from '../../../public/assests/images/cartoes.png';
import gympass from '../../../public/assests/images/gympass.png';
import totalPass from '../../../public/assests/images/totalPass.png';
import styles from './cartoes.module.scss';

export default function Cartoes() {
    return (
        <div className={styles.container}>
            <div className={styles.boxInfo}>
                <h2>Aceitamos</h2>
                <div>
                    <Image
                        alt="logoCartao"
                        src={gympass}
                        width={300}
                        height='auto'
                    />

                    <Image
                        alt="logocartao"
                        src={totalPass}
                        width={300}
                        height='auto'
                    />
                </div>
                <button className={styles.btn}>VEM SER PRIME</button>
            </div>


        </div>
    );
}
