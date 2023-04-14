import React from "react";
import "./galeria.css";

const Galeria = ({ imagenes }) => {
  return (
    <div>
      <h1 className="tittle-galeria">Galeria</h1>
      <section className="container-galeria">
        {imagenes.map((imagen) => (
          <div className="item-galeria">
            <h3>{imagen.nombre}</h3>
            <img src={imagen.url} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Galeria;
