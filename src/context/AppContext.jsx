import { createContext, useState } from "react";

export const AppContext = createContext({
    showTokenModal: false,
    setShowTokenModal: () => {},
    searchNewsInput: "",
    setSearchNewsInput: () => {}
})

export default function AppContextProvider({children}) {
    const [showTokenModal, setShowTokenModal] = useState(false)
    const [searchNewsInput, setSearchNewsInput] = useState("")

    const values = {
        showTokenModal,
        setShowTokenModal,
        searchNewsInput,
        setSearchNewsInput
    }

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}
