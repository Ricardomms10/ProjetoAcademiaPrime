'use client'

import Image from "next/image";
import logo from '../../../public/assests/images/logo.png';
import styles from './styles.module.scss'
import { Stint_Ultra_Condensed } from "next/font/google";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

export default function NavBar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };


    return (
        <div className={styles.container}>
            <div>
                <Image
                    alt="Logo"
                    src={logo}
                    width={200}
                    height={60}

                />

            </div>
            <div className={styles.boxMenu}>
                <p><a>HOME</a></p>
                <p><a>INVESTIDOR</a></p>
                <p><a>ACADEMIAS</a></p>
                <p><a>BLOG</a></p>
                <p><a>FALE CONOSCO</a></p>
            </div>

            <button className={styles.btnStart}>
                COMECE AGORA
            </button>

            <div className={styles.hamburgerIcon} onClick={toggleMenu} >
                <FontAwesomeIcon icon={faBars} />
            </div>

            {isMenuOpen && (
                <div className={styles.overlayMenu} >
                    <a href="/">
                        <p className={styles.menuLink}><p>HOME</p></p>
                    </a>
                    <a href="/Projeto">
                        <p className={styles.menuLink}><p>INVESTIDOR</p></p>
                    </a>
                    <a href="/Projeto">
                        <p className={styles.menuLink}><p>ACADEMIAS</p></p>
                    </a>
                    <a href="/Projeto">
                        <p className={styles.menuLink}><p>BLOG</p></p>
                    </a>
                    <a href="/Projeto">
                        <p className={styles.menuLink}><p>FALE CONOSCO</p></p>
                    </a>
                </div>
            )}
        </div>
    );
}
