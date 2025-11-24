import React from "react";

const Button = ({value}) => {
  return (
    <div>
      <button className="button px-3 py-1 text-lg">{value}</button>
    </div>
  );
};

export default Button;
