import React, {useState} from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";



export const Header = () => {


    const [menu, setMenu] = useState<boolean>(false);

    const clickHandler = () => {
        if(!menu){
            setMenu(true);
        }
        else{
            setMenu(false)
        }
    }

    let activeHamburger = `${!menu ? '' : styles.open}`
    let activeHeader = `${!menu ? '' : styles.open}`

    return(
        <div className={`${styles.header} ${activeHeader}`}>
            <button className={`${styles.hamburger_menu} ${activeHamburger}`} onClick={clickHandler}>
                <span className={styles.hamburger}></span>
                <span className={styles.hamburger_overlay}></span>
            </button>
            <div className={`${styles.Menu} ${styles.ham_til}`} >
                <ul className={styles.Menu_list}>
                    <li className={styles.Menu_list_item}>
                        <Link to={'#home'}>Home
                            <span className={styles.Mask}><span>Home</span></span>
                            <span className={styles.Mask}><span>Home</span></span>
                        </Link>
                    </li>
                    <li className={styles.Menu_list_item}>
                        <Link to={'#portfolio'}>Work
                            <span className={styles.Mask}><span>Work</span></span>
                            <span className={styles.Mask}><span>Work</span></span>
                        </Link>
                    </li>
                    <li className={styles.Menu_list_item}>
                        <Link to={'#services'}>Services
                            <span className={styles.Mask}><span>Services</span></span>
                            <span className={styles.Mask}><span>Services</span></span>
                        </Link>
                    </li>
                    <li className={styles.Menu_list_item}>
                        <Link to={'#services'}>Blog
                            <span className={styles.Mask}><span>Blog</span></span>
                            <span className={styles.Mask}><span>Blog</span></span>
                        </Link>
                    </li>
                    <li className={styles.Menu_list_item}>
                        <Link to={'#contact'}>Contact
                            <span className={styles.Mask}><span>Contact</span></span>
                            <span className={styles.Mask}><span>Contact</span></span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}