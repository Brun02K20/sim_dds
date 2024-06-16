import React, { useEffect, useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Consulta from "./Consulta";
import reservasServices from "../services/reservas.services";

export default function Registro() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [action, setAction] = useState("R");
  const [rows, setRows] = useState([]);
  const [postError, setPostError] = useState("");

  const onSubmit = async (data) => {
    console.log(data);
    const response = await reservasServices.saveReserva(data);
    console.log("respuesta en post: ", response);
    if (response.mensaje) {
      setPostError(response.mensaje); // "no se puedo crear el usuario"
      return;
    }
    setPostError("");
    setAction("C");
  };

  const loadData = async () => {
    setRows(await reservasServices.getReservas());
  };

  useEffect(() => {
    if (action !== "R") {
      loadData();
    }
  }, [action]);

  const onVolver = () => {
    navigate("/");
    setAction("R");
  };

  return (
    <div className="container_app">
      {action === "R" && (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h5>Registro de Reserva de estadía</h5>
            <div className="form-group">
              <label htmlFor="Dni">DNI reserva:</label>
              <input
                type="number"
                className="form-control"
                id="Dni"
                {...register("Dni", {
                  required: {
                    value: true,
                    message: "DNI es requerido",
                  },
                  minLength: {
                    value: 7,
                    message: "DNI debe tener 7 dígitos como mínimo",
                  },
                  maxLength: {
                    value: 8,
                    message: "DNI debe tener 8 dígitos como máximo",
                  },
                })}
              />
              {errors.Dni && (
                <span className="error">{errors.Dni.message}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="FechaIngreso">FechaIngreso:</label>
              <input
                type="date"
                className="form-control"
                id="FechaIngreso"
                {...register("FechaIngreso", {
                  required: {
                    value: true,
                    message: "FechaIngreso es requerido",
                  },
                })}
              />
              {errors.FechaIngreso && (
                <span className="error">{errors.FechaIngreso.message}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="FechaSalida">FechaSalida:</label>
              <input
                type="date"
                className="form-control"
                id="FechaSalida"
                {...register("FechaSalida", {
                  required: {
                    value: true,
                    message: "FechaSalida es requerido",
                  },
                })}
              />
              {errors.FechaSalida && (
                <span className="error">{errors.FechaSalida.message}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="TipoEstadia">Tipo de Estadia:</label>
              <input
                type="text"
                className="form-control"
                id="TipoEstadia"
                {...register("TipoEstadia", {
                  required: {
                    value: true,
                    message: "Tipo de Estadia es requerido",
                  },
                })}
              />
              {errors.TipoEstadia && (
                <span className="error">{errors.TipoEstadia.message}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="Huespedes">Cantidad de Huespedes:</label>
              <input
                type="number"
                className="form-control"
                id="Huespedes"
                {...register("Huespedes", {
                  required: {
                    value: true,
                    message: "La cantidad de Huespedes es requerida",
                  },
                  min: {
                    value: 1,
                    message: "Debe haber un huesped como minimo",
                  },
                  max: {
                    value: 6,
                    message: "Debe haber 6 huespedes como maximo",
                  },
                })}
              />
              {errors.Huespedes && (
                <span className="error">{errors.Huespedes.message}</span>
              )}

              {postError && <span className="error">{postError}</span>}
            </div>

            <button type="submit" className="btn btn-primary m-2">
              ENVIAR
            </button>

            <button className="btn btn-primary  m-2" onClick={() => onVolver()}>
              VOLVER
            </button>
          </form>
        </>
      )}
      {action !== "R" && <Consulta rows={rows} onVolver={onVolver}></Consulta>}
    </div>
  );
}
