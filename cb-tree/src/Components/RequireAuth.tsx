import { Navigate,  } from "react-router-dom";

import useAuth from "../Hooks/useAuth";

const RequireAuth:React.FC = ({ children }) => {
  const { currentUser } = useAuth();
  console.log(currentUser)
  return (
    <>
      {currentUser
        ? children
        : <Navigate to="/" />}
    </>
  )
}

export default RequireAuth