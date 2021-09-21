import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import ErrorMessage from '@components/ErrorMessage';
import { input_field } from '@components/Form/form.module.css'
import swal from 'sweetalert';
import { createStudent } from '@service/estudiantes';
const Register = () => {
    const { register, watch, handleSubmit, formState: { errors } } = useForm();
    const onError = (errors, e) => {
        swal("Algo salio mal", "Algunas preguntas no han sido respondidas", "warning", {
            button: "De acuerdo",
        });
    }
    const onSubmit = async (data) => {
        const res = createStudent({data})
        console.log(res)

    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <div className={input_field}>
                    <input
                        {...register(`nombre`, { required: true })}
                        type="text"
                        id={`nombre`}
                    />
                    <label htmlFor={`nombre`}>Nombre</label>
                </div>
                <div className={input_field}>
                    <input
                        type="text"
                        {...register(`apellido_paterno`, { required: true })}
                        id={`apellido_paterno`}
                    />
                    <label htmlFor={`apellido_paterno`}>Apellido Paterno</label>
                </div>
                <div className={input_field}>
                    <input
                        {...register(`apellido_materno`, { required: true })}
                        type="text"
                        id={`apellido_materno`}
                    />
                    <label htmlFor={`apellido_materno`}>Apellido Materno</label>
                </div>
                <div className={input_field}>
                    <input
                        {...register(`fecha_nacimiento`, { required: true })}
                        type="date"
                        id={`fecha_nacimiento`}
                    />
                    <label htmlFor={`fecha_nacimiento`}>Fecha de nacimiento</label>
                </div>
                <div className={input_field}>
                    <input
                        {...register(`dni`, { required: true, maxLength:8 })}
                        type="number"
                        id={`dni`}
                    />
                    <label htmlFor={`dni`}>DNI</label>
                </div>
                <div className={input_field}>
                    <input
                        {...register(`password`, { required: true })}
                        type="password"
                        id={`password`}
                    />
                    <label htmlFor={`password`}>Contraseña</label>
                </div>
                <div className={input_field}>
                    <input type="submit" value="Registrarme" />
                </div>
            </form>
        </>
    );
}
export default Register;