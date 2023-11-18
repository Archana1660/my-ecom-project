import { useMemo } from "react"

export const useValidCheckUserNamePassword = (userCredential:ValidCheckUserNamePasswordProps) => {
    return useMemo(() => {
        if (userCredential.name !== null && userCredential.password !== null) {
         return false
     }
 },[userCredential])   
}

interface ValidCheckUserNamePasswordProps {
        name: string,
        password: string    
}