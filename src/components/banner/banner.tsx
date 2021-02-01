import React from "react";
import styles from './banner.module.scss';
import about from './../../images/about.jpg';

export const Banner = () => {

    return(
        <div id="home" className={styles.home_banner}>

            <div className={styles.hero_banner_content}>
                <div className={styles.container}>
                    <div className={styles.d_table}>
                        <div className={styles.hero_banner_left}>
                            <div className={styles.intro}>
                                <span>Hi There</span>
                                <h1>I am <span>Jeffrey Aaron</span></h1>
                                <p>A <span className={styles.typed}
                                           data-elements="UI/UX Designer.,Graphic Designer.,UI Developer.">Graphic Designer.</span><span
                                    className={styles.typed_cursor}>|</span></p>
                            </div>
                        </div>
                        <div className={styles.hero_banner_right }>
                            <div className={styles.hero_right} id="scene">
                                <img src={about} alt="side-image"/>
                                        <span className={styles.dok}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}