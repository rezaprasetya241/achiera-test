import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CardComponent = ({ children }: Props) => {
  return <div className="p-4 bg-gray400 rounded-lg">{children}</div>;
};

export default CardComponent;
