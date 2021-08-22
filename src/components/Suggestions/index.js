import Image from 'next/image';
import React, {useState} from 'react';
import {suggestions_card} from '@components/Suggestions/suggestions.module.css'
const Suggestions = ({src="/test-header-1.svg",description}) => {
    return ( 
        <article className={suggestions_card}>
            <Image src={src} alt={description} width={75} height={75} />
            <span className="description">{description}</span>
        </article>
    );
}
export default Suggestions;


