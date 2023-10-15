'use client'

import * as React from "react"
import { createContext } from "react"


interface ContextType {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const initialState ={
    loading: false,
    setLoading: ()=>{}
}

export const GlobalContext = createContext<ContextType>(initialState)


export const GlobalState = ({children}:{children: React.ReactNode})=> {
    
const [loading,setLoading] = React.useState(false)

    return <GlobalContext.Provider value={{loading,setLoading}}>{children}</GlobalContext.Provider>
}