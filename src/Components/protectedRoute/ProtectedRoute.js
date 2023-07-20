import { useContext } from "react"
import AuthContext from "../../context/AuthContext"
import { Navigate } from "react-router-dom";




const ProtectedRoutes = ({children, redirectTo}) =>{
    const {isAuth} = useContext(AuthContext);

    return  isAuth ? children : <Navigate to={redirectTo} />
 }

 export default ProtectedRoutes