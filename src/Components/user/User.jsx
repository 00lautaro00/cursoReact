import { useContext } from "react"
import AuthContext from "../../context/AuthContext"



export const User = () => {
    const {Logout} = useContext(AuthContext)
    return(<>
    <span>Usuario Logueado</span>
    <button onClick={(e) => Logout(e)}>LogOut</button>
    </>)
}