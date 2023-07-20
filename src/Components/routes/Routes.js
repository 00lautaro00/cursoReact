import { BrowserRouter, Route, Routes as ReactRouter } from "react-router-dom"
import { Layout } from "../Layout/Layout"
import { Home } from "../home/Home"
import { Count } from "../Count/Count"
import { NotFound } from "../404/NotFound"
import { Products } from "../products/Products"
import { Product } from "../products/Product"
import AuthContext, { AuthProvider } from "../../context/AuthContext"
import { Login } from "../login/Login"
import { useContext } from "react"
import { User } from "../user/User"
import ProtectedRoutes from "../protectedRoute/ProtectedRoute"

export const Routes = ()  => {
    const isAuth = useContext(AuthContext)

    return(
        <BrowserRouter>
        <AuthProvider>
       <Layout>
       <ReactRouter>
            <Route path="/" element={<Home />}/>
            <Route path="/count" element={<Count />}/>
            <Route path="products" >
                <Route index element={<Products />} />
                <Route path=":product" element={<Product />} />
            </Route>
            {/* <Route path="login">
                <Route index element={<Login/>} />
            </Route> */}
            {!isAuth &&
            <Route path="login" element={<Login />}/>}
            <Route path="user/:username" element={
                <ProtectedRoutes redirectTo={"/login"}>
                    <User />
                </ProtectedRoutes>
            }/>
            <Route path="*" element={<NotFound />}/>
        </ReactRouter>
       </Layout>
       </AuthProvider>
        </BrowserRouter>
    )
}