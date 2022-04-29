import { Navigate, useLocation,  } from "react-router-dom";

import useAuth from "../Hooks/useAuth";

const RequireAuth:React.FC = ({ children }) => {
  const { currentUser } = useAuth();
  const location = useLocation() 
  return (
    <>
      {currentUser
        ? children
        : <Navigate to="/" replace state={{ path: location.pathname }} />}
    </>
  )
}

export default RequireAuth