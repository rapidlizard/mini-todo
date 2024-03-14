import './Header.scss';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Header = (props: Props) => {
  return (
    <div className="header">
      <div>
        <h1>Mini Todo</h1>
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default Header;
