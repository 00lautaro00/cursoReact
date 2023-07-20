import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


const AuthContext =  createContext()

const initial_state = {
    username: "",
    password: ""
};

const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [form, setForm] = useState(initial_state);
    const [isAuth, setIsAuth] = useState(localStorage.getItem("user"));
    const [user, setUser] = useState(isAuth ? localStorage.getItem("user") : "");
    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!form.username.trim() || !form.password.trim()){
            alert("completar campos");
            return
        }
        setUser(form.username);
        setForm(initial_state);
        setIsAuth(true);

        localStorage.setItem("user",form.username);
        navigate(`user/${form.username}`)
    }
    const Logout = () => {
        localStorage.removeItem("user");
        navigate("/login");
        setIsAuth(false);
        setUser("");
    }
    const data = {
        isAuth,
        user,
        form,
        handleChange,
        handleSubmit,
        Logout
    }
return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>

}

export {AuthProvider}
export default AuthContext