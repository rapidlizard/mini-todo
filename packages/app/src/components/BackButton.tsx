import { useNavigate } from 'react-router-dom';
import './BackButton.scss';

const BackButton = () => {
  let navigate = useNavigate();

  return (
    <a className="back" onClick={() => navigate(-1)}>
      {'< ' + 'Back'}
    </a>
  );
};

export default BackButton;
