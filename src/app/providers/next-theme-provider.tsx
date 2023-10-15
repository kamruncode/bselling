
import { ThemeProvider } from "next-themes";
import  { ReactNode } from "react";

export const NextThemeProvider = ({children}:{children:ReactNode}) => {

    return <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">{children}</ThemeProvider>
}