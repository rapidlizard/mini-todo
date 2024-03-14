import { useNavigate } from 'react-router-dom';
import './Header.scss';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Header = (props: Props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('');
  };

  return (
    <div className="header">
      <div>
        <h1 onClick={handleClick}>Mini Todo</h1>
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default Header;
