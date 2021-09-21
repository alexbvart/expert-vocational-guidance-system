import React, { useEffect, useState } from 'react';
import Card from './index';
import styles from './card.module.css'
import { useForm } from "react-hook-form";
import swal from 'sweetalert'
import post from '@module/post';
import scrollToRef from '@hooks/scrollToRef';
import { CreateCasm } from 'Helper/CasmHelper';
import ErrorMessage from '@components/ErrorMessage';

const CasmForm  = ({ questions, className }) => {
    const { register, watch, handleSubmit, formState: { errors } } = useForm();
    const watchAllFields = watch();
    const [casmData, setCasmData] = useState([])

    const executeScroll = (theRef) => scrollToRef(theRef)


    const onSubmit = async (data) => {
        const chunkAnswer = await CreateCasm({data})
        setCasmData([...casmData,...chunkAnswer])
     /* const res = await post({ src: "test", data: {
            CASM, HEA, BERGER
        } })
        if (res.status === 201) {
            swal("Datos registrados", "El test se esta evaluando", "success", {
                button: "Ver Resultado",
            });
        } */
    }

    const onError = (errors, e) => {
        swal("Algo salio mal", "Algunas preguntas no han sido respondidas", "warning", {
            button: "De acuerdo",
        });
    }
    if (errors) {
        const firsterror = Object.values(errors)[0];
        firsterror && executeScroll(firsterror.ref)
    }

    const classStyles = className ? `${className} ${styles.grid}` : `${styles.grid}`
    return (
        <>
            <form className={classStyles} onSubmit={handleSubmit(onSubmit, onError)} >
                {questions&&
                    questions.map((card, index) => (
                        <Card
                            title={card.title}
                            key={index}
                        >
                            <input
                                {...register(`${index + 1}`, { required: true })}
                                type="checkbox"
                                value="a"
                                id={`${index + 1}a`}
                            />
                            <label htmlFor={`${index + 1}a`}>{card.a}</label>
                            <br></br>
                            <input
                                {...register(`${index + 1}`, { required: true })}
                                type="checkbox"
                                value="b"
                                id={`${index + 1}b`}
                            />
                            <label htmlFor={`${index + 1}b`}>{card.b}</label>
                            {errors[`${index + 1}`] && <ErrorMessage>No olvides marcar una respuesta</ErrorMessage>}
                            <span className="flex_center">{`${index + 1}`}</span>
                        </Card>
                    ))
                }
                <input type="submit" value="Responder test" id="submitButton" />
            </form>
        </>
    );
}
export default CasmForm;
