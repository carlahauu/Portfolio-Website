import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

export default function ProjectCard(props) {
  const {
    project: { title, imageSrc, skills, description, demo, source },
  } = props;
  return (
    <div className={styles.container}>
      <img className={styles.image} src={getImageUrl(imageSrc)} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skills, id) => {
          <li className={styles.skill} key={id}>
            {skills}
          </li>;
        })}
      </ul>
      <div className={styles.buttons}>
        <a className={styles.button} href={demo}>
          Demo
        </a>
        <a className={styles.button} href={source}>
          GitHub
        </a>
      </div>
    </div>
  );
}
