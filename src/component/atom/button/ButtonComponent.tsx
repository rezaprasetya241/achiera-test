import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  disabled: boolean;
  handleClick: () => void;
}

const ButtonComponent = ({ handleClick, children, disabled }: Props) => {
  return (
    <>
      <button
        className="bg-blue-400 disabled:bg-slate-400 text-white p-2 rounded-lg w-full"
        onClick={handleClick}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};

export default ButtonComponent;
