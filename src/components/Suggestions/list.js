import React, {useState} from 'react';
import Suggestions from '.';
import {suggestions_list} from './suggestions.module.css'

const suggestionsData = [
    {src:"/test-header-1.svg",description:"Toma menos de 40 minutos."},
    {src:"/test-header-2.svg",description:"Responde honestamente (aún si no te gusta la respuesta)."},
    {src:"/test-header-3.svg",description:"No dejes ninguna respuesta sin marcar."},
]

const SuggestionsList = () => {
    return ( 
        <section className={suggestions_list}>
            {suggestionsData && 
                suggestionsData.map((s,index)=>(
                    <Suggestions src={s.src} description={s.description} key={index} />
                ))
            }
        </section>
    );
}
export default SuggestionsList;