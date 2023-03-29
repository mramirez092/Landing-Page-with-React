import React from "react"
const cardsData = [
  {
    //image: "../../img/html.jpg",
    image: "../../img/html.jpg",
    title: "HTML",
    text: "HyperText Markup Language (HTML) es un lenguaje de marcado utilizado para crear la estructura y contenido de una página web."
  },
  {
    image: "css.jpg",
    title: "CSS",
    text: "Cascading Style Sheets (CSS) es un lenguaje de hojas de estilo utilizado para describir la presentación de un documento HTML."
  },
  {
    image: "js.jpg",
    title: "JavaScript",
    text: "JavaScript es un lenguaje de programación utilizado para agregar interactividad y dinamismo a las páginas web."
  },
  {
    image: "react.jpg",
    title: "React",
    text: "React es una biblioteca de JavaScript utilizada para construir interfaces de usuario."
  }
];

const Cards = () => {
  return (
    <div className="d-flex container gap-4">
      {cardsData.map(card => (
        <div key={card.title} className="card" style={{ width: "325px", height: "400px" }}>
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
