import React, { useState } from 'react';
import styles from './card.module.css'


const Card = ({ title, children }) => {
    return (
        <>
                <article
                    className={styles.card}
                >
                    {/* <h2>{title} &rarr;</h2> */}
                    {children}
                </article>
        </>
    );
}
export default Card;