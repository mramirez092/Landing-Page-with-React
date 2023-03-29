import React from "react"
import htmlImage from "../../img/html.jpg"
import cssImage from "../../img/css.jpg"
import jsImage from "../../img/js.jpg"
import reactImage from "../../img/react.jpg"
const cardsData = [
  {
    image: htmlImage,
    title: "HTML",
    text: "HyperText Markup Language (HTML) es un lenguaje utilizado para crear la estructura y contenido de una página web."
  },
  {
    image: cssImage,
    title: "CSS",
    text: "Cascading Style Sheets (CSS) es un lenguaje de hojas de estilo utilizado para la presentación de un documento HTML."
  },
  {
    image: jsImage,
    title: "JavaScript",
    text: "JavaScript es un lenguaje de programación utilizado para agregar interactividad a las páginas web."
  },
  {
    image: reactImage,
    title: "React",
    text: "React es una biblioteca de JavaScript utilizada para construir interfaces de usuario."
  }
];

const Cards = () => {
  return (
    <div className="d-flex container gap-4 pb-5">
      {cardsData.map(card => (
        <div key={card.title} className="card" style={{ width: "325px", height: "450px" }}>
          <img src={card.image} className="card-img-top" alt={card.title} />
          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">{card.text}</p>
            <a href="#" className="btn btn-primary">Find Out More!</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
