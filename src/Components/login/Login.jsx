import { useContext, useEffect } from "react"
import AuthContext from "../../context/AuthContext"
import { useNavigate } from "react-router-dom";



export const Login = () =>{

    const {isAuth, form, handleSubmit, handleChange} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(!isAuth){
            navigate("/login");
        }
    }, [isAuth, navigate])

    return (
        <>
            <h2>
                Login
            </h2>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <input type="text" 
                placeholder="user" 
                name="username" 
                id="username" 
                value={form.username}
                onChange={(e) => handleChange(e)}
                />
                <input type="text" 
                placeholder="password" 
                name="password" 
                id="password" 
                value={form.password}
                onChange={(e) => handleChange(e)}
                />
                <input type="submit" value={"send"}/>
            </form>
        </>
    )
}