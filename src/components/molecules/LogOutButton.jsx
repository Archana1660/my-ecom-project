import { Button } from "../atoms/Button";
import { useNavigate } from "react-router-dom";
export const LogOutButton = () => {  
    const navigate = useNavigate()
    const handleLogOut = () => {
        navigate("/login")
        return window.localStorage.removeItem("token")
    }
    
    let styleButton = `bg-purple-400 rounded-lg w-32 h-10 text-white hover:bg-purple-600 duration-200 `
    return <Button handleOnClick={handleLogOut} styleButton={styleButton}>Log Out</Button>
}