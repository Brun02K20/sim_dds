import React, { useState } from 'react'

export default function Registro() {


    const onSubmit = async(data)=>{

    }

    const loadData = async()=>{

    }

    const onVolver = ()=>{

    }

    return (
        <div className='container_app'>
            {
                action === 'R' && (
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h5>Registro de Reserva de estadía</h5>
                        <div className="form-group">
                            <label htmlFor="Dni">DNI reserva:</label>
                            <input type="text" className="form-control" id="Dni"  {...register("Dni", { required: 'Este campo es requerido' })}/>
                            {errors.dni && <span className='error'>{errors.dni.message}</span>}
                        </div>
                        
                    </form>
                )
            }
            {
                action !== 'R' && (
                    <Consulta rows = {rows} onVolver={onVolver}></Consulta>
                )
            }
        </div >
    )
}
