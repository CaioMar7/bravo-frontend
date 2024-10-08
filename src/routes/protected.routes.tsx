import { Routes, Route } from "react-router-dom";
import { Profile } from "../pages/Profile";

export const ProtectedRoutes = () => {
    return (
        <Routes>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
    )
}