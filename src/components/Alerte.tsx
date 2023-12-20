import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
} 

const Alerte = ({children, onClose} : Props) => {
  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
      {children}
      <button type="button" color="danger" className="btn-close" data-bs-dismiss="alert" onClick={onClose} aria-label="Close"></button>

    </div>
  )
}

export default Alerte;