// components/PersonCard.tsx
import React from 'react';

interface PersonCardProps {
  name: string;
  position: string;
  image: string;
}

const PersonCard: React.FC<PersonCardProps> = ({ name, position, image }) => {
  return (
    <div className="max-w-xs mx-auto p-1 text-center">
      <img className="mx-auto w-480 h-480 object-cover mb-4" src={image} alt={name} />
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-700">{position}</p>
    </div>
  );
};

export default PersonCard;
