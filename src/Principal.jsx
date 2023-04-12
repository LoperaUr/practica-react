import React from "react";
import Galeria from "./Galeria";

import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";

const imagenes = [
  { nombre: "imagen 1", url: img1 },
  { nombre: "imagen 2", url: img2 },
  { nombre: "imagen 3", url: img3 },
  { nombre: "imagen 4", url: img4 },
];

const Principal = () => {
  return (
    <div>
      <Galeria imagenes={imagenes} />
    </div>
  );
};

export default Principal;
