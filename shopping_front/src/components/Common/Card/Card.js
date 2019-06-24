import React from 'react';
import './Card.scss';

const Card = ({ data }) => {
  console.log(data);
  return (
    <div className="card">
      <img src="http://localhost:8080/api/attachment" width={'200px'} alt="img" />
      <div className="card-name">{data.name}</div>
      <div>{data.content}</div>
      <div>&#92;{data.cost}</div>
    </div>
  );
};

export default Card;
