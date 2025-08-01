import styles from './Header.module.scss';
import Logo from "@/components/Logo/Logo.jsx";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisVertical, faXmark} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
    const [show, setShow] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 1000);
        return () => clearTimeout(timer);

    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [isMenuOpen]);

    return (
        <header className={styles.header}>
            <div className={styles.header__inner}>
                <h1>
                    <a href="./">
                        <Logo/>
                    </a>
                </h1>
                {/* PC용 네비게이션 */}
                <nav className={styles.pcNav}>
                    <ul className={`${show ? styles.visible : ""}`}>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skill">Skill</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <button
                    className={styles.menuToggle}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="모바일 메뉴 열기"
                >
                  {isMenuOpen ?<FontAwesomeIcon className={styles.icon} style={{color: "#fff"}} icon={faXmark} /> :<FontAwesomeIcon className={styles.icon} icon={faEllipsisVertical} />  }
                </button>
            </div>
            {/* 모바일 메뉴 오버레이 */}
            <nav className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ''}`}>
                <ul>
                    <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
                    <li><a href="#skill" onClick={() => setIsMenuOpen(false)}>Skill</a></li>
                    <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
                    <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;