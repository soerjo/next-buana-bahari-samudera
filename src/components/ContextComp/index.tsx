'use client'

import React from 'react'

export interface IAllContext {
    allContext: any,
    setallContext: React.Dispatch<React.SetStateAction<any>>
}

export const AllContext = React.createContext<IAllContext>({} as IAllContext)

const ContextComp = ({ children }: { children: React.ReactNode }) => {
    const [allContext, setallContext] = React.useState()

    return (
        <AllContext.Provider value={{ allContext, setallContext }} >
            {children}
        </AllContext.Provider>
    )
}

export default ContextComp