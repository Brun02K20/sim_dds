import React from "react";

export default function Consulta({ rows, onVolver }) {
  console.log("estoy en consulta: ", rows);

  return (
    <>
      {rows && (
        <>
          <div className="container table-responsive" style={{ marginTop: 80 }}>
            <table className="table table-bordered border-black border-opacity-50 table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col" className="text-center">
                    Dni
                  </th>
                  <th scope="col" className="text-center">
                    Fecha de Ingreso
                  </th>
                  <th scope="col" className="text-center">
                    Fecha de Salida
                  </th>
                  <th scope="col" className="text-center">
                    Tipo de Estadia
                  </th>
                  <th scope="col" className="text-center">
                    Huespedes
                  </th>
                  {/* <th scope="col" className="text-center">
                    Acciones
                  </th> */}
                </tr>
              </thead>
              <tbody id="lista-carnets">
                {rows &&
                  rows.map((reserva, index) => {
                    return (
                      <tr key={index + 1}>
                        <td>{reserva.Dni}</td>
                        <td>{reserva.FechaIngreso}</td>
                        <td>{reserva.FechaSalida}</td>
                        <td>{reserva.TipoEstadia}</td>
                        <td>{reserva.Huespedes}</td>
                        {/* <td>
                          <button
                            onClick={() => navigate(`/actualizar/${user.id}`)}
                            className="btn btn-success"
                            style={{
                              backgroundColor: "#006400",
                              border: "none",
                              margin: "4px",
                            }}
                          >
                            <i
                              className="bi bi-pencil-fill"
                              style={{ fontSize: "16px", color: "white" }}
                            ></i>
                          </button>
                          <button
                            onClick={async () =>
                              await handleDeleteUser(user.id)
                            }
                            className="btn btn-danger"
                            style={{
                              backgroundColor: "#8B0000",
                              border: "none",
                              margin: "4px",
                            }}
                          >
                            <i
                              className="bi bi-trash-fill"
                              style={{ fontSize: "16px", color: "white" }}
                            ></i>
                          </button>
                        </td> */}
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>

          <button className="btn btn-primary" onClick={() => onVolver()}>
            VOLVER
          </button>
        </>
      )}
    </>
  );
}
