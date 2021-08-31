import React, { useEffect, useState } from 'react';
import Card from './index';
import styles from './card.module.css'
import { useForm } from "react-hook-form";
import swal from 'sweetalert'
import post from '@services/post';
import scrollToRef from '@hooks/scrollToRef';
// The following component is an example of your existing Input Component
const Input = ({ label, register, required }) => (
    <>
        <label>{label}</label>
        <input {...register(label, { required })} />
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
        console.log({ data });
        const res = await post({src:"test", data:data})
        if(res.status===201){
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
                {data &&
                    data.map((card, index) => (
                        <Card
                            title={card.titulo}
                            key={index}
                        >
                            <input
                                {...register(`question${index + 1}`, { required: true })}
                                type="checkbox"
                                value="a"
                                id={`question${index + 1}a`}
                            />
                            <label htmlFor={`question${index + 1}a`}>{card.a}</label>
                            <br></br>
                            <input
                                {...register(`question${index + 1}`, { required: true })}
                                type="checkbox"
                                value="b"
                                id={`question${index + 1}b`}
                            />
                            <label htmlFor={`question${index + 1}b`}>{card.b}</label>
                            {errors[`question${index + 1}`] && <ErrorMessage>No olvides marcar una respuesta</ErrorMessage>}
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