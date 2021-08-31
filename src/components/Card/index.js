import React, { useState } from 'react';
import styles from './card.module.css'


const Card = ({ title, children }) => {
    return (
        <>
                <article
                    className={styles.card}
                >
                    {title && <h2>{title}</h2>}
                    {children}
                </article>
        </>
    );
}
export default Card;
/* &rarr; */