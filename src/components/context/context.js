import { createContext, useState } from "react";

const ContextMain = createContext();

export function ContextFun({ children }) {

    const [isTogg,setIsTogg] = useState(false);

    
    const obj = {
        isTogg,setIsTogg
    }

    return (
        < ContextMain.Provider value={obj} >
            {children}
        </ContextMain.Provider >
    )
}
export default ContextMain;