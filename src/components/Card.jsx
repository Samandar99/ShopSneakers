import React from "react";

const Card = () => {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/Group90.svg" alt="" />
      </div>

      <img width={133} height={112} src="/img/sneakers/image1.jpg" alt="" />
      <h5 className="marginbottom">Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>12 999 руб</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/pluses.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Card;
