import { ReactNode } from 'react';
import './Button.scss';

type Props = {
  children: ReactNode;
  onClick: () => void;
};

const Button = (props: Props) => {
  return (
    <button type="submit" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
