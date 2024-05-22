import React from "react";

enum ButtonTypes {
  "button" = "button", 
  "submit" = "submit",
  "reset" = "reset",
}


interface ButtonProps {
  type: ButtonTypes,
  title: string,
  icon?: JSX.Element,
  variant?: string,
  onClick?: () => void,
  iconColor?: string;
}

const Button = ({ type, title, icon, variant, onClick, iconColor }:any ) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`p-1.5 px-3 gap-3 rounded-full ${variant}`}
      style={{
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        flexDirection: 'row', // Align content in a row
      }}
    >
      {icon && React.cloneElement(icon, { style: { color: iconColor } })}
      <label className='cursor-pointer'>{title}</label>
    </button>
  )
}

export default Button;
