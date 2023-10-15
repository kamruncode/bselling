'use client'

import * as React from "react"
import {SessionProvider} from "next-auth/react"
import { ReactNode } from "react"

export const NextAuthProvider = ({children}:{children: React.ReactNode})=>{
 return <SessionProvider>{children}</SessionProvider>
}