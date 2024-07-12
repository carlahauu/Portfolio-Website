import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'

export const About = () => {
  return (
    <section className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
            <img className={styles.aboutImg} src={getImageUrl("about/aboutImage.png")} 
        alt='Image of computer setup'/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon"/>
                    <div>
                        <h3>Frontend Developer</h3>
                        <p>I have experience developing the front end of websites, allowing users to easily interact with the page.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon"/>
                    <div>
                        <h3>Backend Developer</h3>
                        <p>I have experience developing back-end systems and APIs.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="UI Icon"/>
                    <div>
                        <h3>Designer</h3>
                        <p>Not only have I designed mockups through Figma, I have also designed branding guidelines for various businesses and organizations.</p>
                    </div>
                </li>
            </ul>
        
        </div>
    </section>
  )
}
