import React, { createContext, ReactNode, useContext, useState} from "react";
import api from "../network/api";

interface AuthContextType {
    accessToken: string | null;
    setAccessToken: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [accessToken, setAccessToken] = useState<string | null>(null);

    const logout = () => {
        setAccessToken(null);
        api.putAccessToken(null)
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