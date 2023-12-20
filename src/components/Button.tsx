import { ReactNode } from "react"

interface Props {
    children: ReactNode;
    color?: 'secondary' | 'danger' | 'primary'; //you can only set one of these
    onclick: () => void;
}

export const Button = ({children, color = 'primary', onclick} : Props) => {
  return (
    <div>
        <button type="button" className={'btn btn-outline-' + color} onClick={onclick}>{children}</button>
    </div>
  )
}
