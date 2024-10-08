import { BrowserRouter } from "react-router-dom";

import { useAuth } from "../context/AuthProvider/useAuth";

import { AppRoutes } from "./app.routes";
import { ProtectedRoutes } from "./protected.routes";

export const Routes = () => {
    const { email } = useAuth()

    return (
        <BrowserRouter>
            { email ? <ProtectedRoutes/> : <AppRoutes/>}
        </BrowserRouter>
    )
}