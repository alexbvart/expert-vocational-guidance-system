import React, { useEffect, useState } from 'react';
import Card from './index';
import styles from './card.module.css'
import { useForm } from "react-hook-form";
import swal from 'sweetalert'
import post from '@services/post';
import scrollToRef from '@hooks/scrollToRef';
// The following component is an example of your existing Input Component
const Input = ({ label, register, required, type }) => (
    <>
        <label>{label}</label>
        <input type={type} {...register(label, { required })} />
    </>
);

// you can use React.forwardRef to pass the ref too
const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
    <>
        <label>{label}</label>
        <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
            <option value="20">20</option>
            <option value="30">30</option>
        </select>
    </>
));

const ErrorMessage = ({ children }) => (
    <span className="error_message">
        {children}
    </span>
)



const CardList = ({ data, className }) => {
    const { register, watch, handleSubmit, formState: { errors } } = useForm();
    const watchAllFields = watch();

    const executeScroll = (theRef) => scrollToRef(theRef)
    /* useEffect(() => {
        const subscription = watch((value, { name, type }) => console.log({ value, name, type }));
        return () => subscription.unsubscribe();
    }, [watch]); */

    const onSubmit = async (data) => {
        

        const CASM = Object.fromEntries(Object.entries(data).slice(0,10));
        const HEA = Object.fromEntries(Object.entries(data).slice(11,20));
        const BERGER = Object.fromEntries(Object.entries(data).slice(21,30));
/*         const CASM = Object.fromEntries(Object.entries(data).slice(0,143));
        const HEA = Object.fromEntries(Object.entries(data).slice(144,220));
        const BERGER = Object.fromEntries(Object.entries(data).slice(221,250)); */

        const res = await post({ src: "test", data: {
            CASM, HEA, BERGER
        } })
        if (res.status === 201) {
            swal("Datos registrados", "El test se esta evaluando", "success", {
                button: "Ver Resultado",
            });
        }
    }
    const onError = (errors, e) => {
        swal("Algo salio mal", "Algunas preguntas no han sido respondidas", "warning", {
            button: "De acuerdo",
        });
    }
    if (errors) {
        const firsterror = Object.values(errors)[0];
        firsterror && executeScroll(firsterror.ref)


        /* const lasterror = Object.values(errors)[(Object.values(errors).length)-1]
        firsterror===lasterror &&  console.log("vamos al boton",firsterror===lasterror,firsterror,lasterror)
        console.log(errors); */
    }

    /* console.log(watch); */
    /* console.log(useForm()); */


    const classStyles = className ? `${className} ${styles.grid}` : `${styles.grid}`
    return (
        <>
            <form className={classStyles} onSubmit={handleSubmit(onSubmit, onError)} >
                {data[0] &&
                    data[0].preguntas.map((card, index) => (
                        <Card
                            title={card.title}
                            key={index}
                        >
                            <input
                                {...register(`CASM${index + 1}`, { required: true })}
                                type="checkbox"
                                value="a"
                                id={`CASM${index + 1}a`}
                            />
                            <label htmlFor={`CASM${index + 1}a`}>{card.a}</label>
                            <br></br>
                            <input
                                {...register(`CASM${index + 1}`, { required: true })}
                                type="checkbox"
                                value="b"
                                id={`CASM${index + 1}b`}
                            />
                            <label htmlFor={`CASM${index + 1}b`}>{card.b}</label>
                            {errors[`CASM${index + 1}`] && <ErrorMessage>No olvides marcar una respuesta</ErrorMessage>}
                            <span className="flex_center">{`${index + 1}`}</span>
                        </Card>
                    ))
                }
                {data[1] &&
                    data[1].preguntas.map((card, index) => (
                        <Card
                            title={card.titulo}
                            key={index}
                        >
                            <input
                                {...register(`BERGER${index + 1}`, { required: true })}
                                type="radio"
                                value="9"
                                id={`BERGER${index + 1}9`}
                            />
                            <label htmlFor={`BERGER${index + 1}9`}>{card.a}</label>
                            <br></br>
                            <input
                                {...register(`BERGER${index + 1}`, { required: true })}
                                type="radio"
                                value="1"
                                id={`BERGER${index + 1}1`}
                            />
                            <label htmlFor={`BERGER${index + 1}1`}>{card.b}</label>
                            {errors[`BERGER${index + 1}`] && <ErrorMessage>No olvides marcar una respuesta</ErrorMessage>}
                            <span className="flex_center">{`${index + 1}`}</span>
                        </Card>
                    ))
                }
                {data[2] &&
                    data[2].preguntas.map((card, index) => (
                        <Card
                            title={card.title}
                            key={index}
                        >
                            <input
                                {...register(`HEA${index + 1}`, { required: true })}
                                type="radio"
                                value="S"
                                id={`HEA${index + 1}S`}
                            />
                            <label htmlFor={`HEA${index + 1}S`}>Me ocurre siempre</label>

                            <input
                                {...register(`HEA${index + 1}`, { required: true })}
                                type="radio"
                                value="M"
                                id={`HEA${index + 1}M`}
                            />
                            <label htmlFor={`HEA${index + 1}M`}>Me ocurre mucho</label>

                            <input
                                {...register(`HEA${index + 1}`, { required: true })}
                                type="radio"
                                value="P"
                                id={`HEA${index + 1}P`}
                            />
                            <label htmlFor={`HEA${index + 1}P`}>Me ocurre pocas veces, casi nunca</label>

                            <input
                                {...register(`HEA${index + 1}`, { required: true })}
                                type="radio"
                                value="A"
                                id={`HEA${index + 1}A`}
                            />
                            <label htmlFor={`HEA${index + 1}A`}>Me ocurre alguna vez</label>

                            <input
                                {...register(`HEA${index + 1}`, { required: true })}
                                type="radio"
                                value="N"
                                id={`HEA${index + 1}N`}
                            />
                            <label htmlFor={`HEA${index + 1}N`}>No me ocurre nunca</label>

                            {errors[`HEA${index + 1}`] && <ErrorMessage>No olvides marcar una respuesta</ErrorMessage>}
                            <span className="flex_center">{`${index + 1}`}</span>
                        </Card>
                    ))
                }
                <input type="submit" value="Responder test" id="submitButton" />
            </form>
        </>
    );
}
export default CardList;
