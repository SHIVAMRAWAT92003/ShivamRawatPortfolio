import styles from './PublicationStyle.module.css';
import pub1 from '../../assets/pub1.png';
import pub2 from '../../assets/pub2.png';
import pub3 from '../../assets/pub3.png';
import React from 'react';

const Publication = () => {
    return (
        <section id="projects" className={styles.container}>
            <h1 className={styles.sectionTitle}>Publications</h1>
            <div className={styles.projectsContainer}>
                <div className={styles.projectCard}>
                    <img src={pub1} alt="Patent Image" className={styles.patentImage} />
                    <div className={styles.textContainer}>
                        <h3 className={styles.patentHeading}>Application No: 202411049366</h3>
                        <p className={styles.patentDescription}>
                            Automotive Object Detection WheelChair for Animals
                        </p>
                    </div>
                </div>
                
                <div className={styles.projectCard}>
                    <img src={pub2} alt="Patent Image" className={styles.patentImage} />
                    <div className={styles.textContainer}>
                        <h3 className={styles.patentHeading}>Application No: 202411064032 A</h3>
                        <p className={styles.patentDescription}>
                        METHOD FOR DISPENSING SANITARY PADS USING A SMART VENDING MACHINE 
                        </p>
                    </div>
                </div>
            </div>

                <div className={styles.projectCard}>
                    <img src={pub3} alt="Patent Image" className={styles.patentImage} />
                    <div className={styles.textContainer}>
                        <h3 className={styles.patentHeading}>Application No: 202411064032 A</h3>
                        <p className={styles.patentDescription}>
                        METHOD FOR DISPENSING SANITARY PADS USING A SMART VENDING MACHINE 
                        </p>
                    </div>
                </div>
            

        </section>
    );
};

export default Publication;
