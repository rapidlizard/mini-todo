import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../contexts/AuthContext";

export default function Root () {
  const navigate = useNavigate();
  const {user} = useAuthContext()

  const handleClick = () => {
    navigate('/register')
  }

  return (
    <>
      <h1>Main page</h1>
      
      {!user && 
        <button onClick={handleClick}>Register</button>
      }
    </>
  );
}