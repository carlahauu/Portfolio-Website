import React from "react"; 
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Nice to meet you, I am Carla Hau!</h1>
            <p className={styles.description}>I am currently an undergraduate student pursing my bachelor's degree in Computer Science with Business Applications at the University of California, Riverside! Reach out if you'd like to learn more about me!</p>
            <a className={styles.contactBtn} href="mailto:carlahau110@gmail.com">Contact Me</a>
        </div>
        <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="Hero Image of Carla Hau"/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>; 
}; 