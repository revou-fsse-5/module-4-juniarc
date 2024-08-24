import React, { createContext, ReactNode, useContext, useState} from "react";
import api from "../network/api";
import { useCookies } from "react-cookie";

interface AuthContextType {
    accessToken: string | null;
    setAccessToken: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [cookies, setCookie, removeCookie] = useCookies(['authToken']);

    const logout = () => {
        setAccessToken(null);
        api.putAccessToken(null)
        removeCookie('authToken', { path: '/'})
    }

    return (
        <AuthContext.Provider value={{ accessToken, setAccessToken, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = (): AuthContextType => {
    const context = useContext(AuthContext);
    if(context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}