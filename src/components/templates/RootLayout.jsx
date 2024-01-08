import { Outlet, Navigate } from "react-router-dom"
import { NavBarPanel } from "../organisms/NavBarPanel"

export const RootLayout = () => {
    let isToken = window.localStorage.getItem('token') ? true : false
    const auth = { token: isToken }
    return auth.token ?
        <main>
            <header className="sticky top-0 z-10">
                <NavBarPanel />
            </header>
            <Outlet />
        </main> : <Navigate to="/my-ecom-project/login" />
}