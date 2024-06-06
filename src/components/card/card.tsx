import React from 'react';

import './card.css';

interface CardProps {
  price: number;
  title: string;
  image: string;
  description: string;
}

export function Card({ price, title, image, description }: CardProps) {
  return (
    <div className="card">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p><b>Valor: </b>R${price.toFixed(2)}</p>
        <h2>{description}</h2>
    </div>
  );
}
