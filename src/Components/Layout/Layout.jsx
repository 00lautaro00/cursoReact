import { NavBar } from "../navbar/NavBar"


export const Layout = ({children}) => {
    return (<>
    <NavBar />
    {children}
    <p>scaloneta</p>
    </>)
}