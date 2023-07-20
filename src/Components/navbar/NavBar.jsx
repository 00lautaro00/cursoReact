import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <>
        <div>
            <div>
                <h1>
                    loguito
                </h1>
            </div>
            <div>
                <Link to={"/login"}> Login</Link>
                <Link to={"/count"}> count</Link>
                <Link to={"/"}> Home</Link>

            </div>
        </div>
        </>
    )
}