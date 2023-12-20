import { ReactNode } from "react";

interface Props {
  children: ReactNode;
} 

const Alerte = ({children} : Props) => {
  return (
    <div className="alert alert-primary" role="alert">
      {children}
    </div>
  )
}

export default Alerte;