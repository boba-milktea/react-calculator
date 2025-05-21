import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  handleClick: () => void;
};

const Button = ({ children, handleClick }: ButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className="p-4 w-16 h-16 border-4 rounded-full bg-teal-300 text-white hover:bg-teal-400 shadow-sm font-bold cursor-pointer md:w-24 md:h-24 md:text-xl"
    >
      {children}
    </button>
  );
};

export default Button;
