import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Menu</h1>
      <button onClick={() => navigate("/registro")}>Registro</button>
    </div>
  );
}
