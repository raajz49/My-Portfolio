import React from 'react';

const ContactCard = ({ title, name, icon, iconColor, textColor, bgColor }:any) => {
  return (
    <div className={`p-4 rounded-lg shadow-lg ${bgColor}`}>
      <div className="flex items-center mb-2">
        {React.cloneElement(icon, { style: { color: iconColor, fontSize: '1.5rem', marginRight: '0.5rem' } })}
        <h3 className={`font-semibold text-lg ${textColor}`}>{name}</h3>
      </div>
    </div>
  );
};

export default ContactCard;
