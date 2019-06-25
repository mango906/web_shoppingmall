import React from 'react';
import './Card.scss';

const Card = ({ data, handleRedirect }) => {
  return (
    <div className="card" onClick={handleRedirect.bind(this, data.id)}>
      <img
        src={`http://localhost:8080/api/attachment/${data.image}`}
        width={'350px'}
        height={'350px'}
        alt="img"
      />
      <div className="card-name">{data.name}</div>
      <div>{data.content}</div>
      <div>&#92;{data.cost}</div>
    </div>
  );
};

export default Card;
