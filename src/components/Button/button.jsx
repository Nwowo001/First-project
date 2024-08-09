import './button.css';
import { useNavigate } from 'react-router-dom';

function Button() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate('/sign-in')} className='sign-in-button'>
      Sign In
    </button>
  );
}

export default Button;
