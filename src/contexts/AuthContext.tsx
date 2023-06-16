/* eslint-disable @typescript-eslint/no-empty-function */
"use client";

import { setCookie } from "nookies";

import { useState, useEffect, createContext, useContext } from "react";

import { IAuthContext, IUser } from "../interfaces/auth";
import { api } from "../services/api";

const defaultAuthContext = {
    authenticated: false,
    login: async () => {},
    logout: () => {},
    userIsLoading: true,
    setUserIsLoading: () => {},
    user: null,
    setUser: () => {},
};

const AuthContext = createContext<IAuthContext>(defaultAuthContext);

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [userIsLoading, setUserIsLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem("ippon-logged-user");

        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser));
        }

        setUserIsLoading(false);
    }, []);

    const login = async (email: string, password: string) => {
        try {
            const { data } = await api.post("/autenticacao/login", { email: email, senha: password });

            const loggedUser = {
                token: data.access_token,
                user,
                steps: {
                    units: true,
                    classes: false,
                    students: false,
                },
            };

            setCookie(null, "ippon-logged-user", JSON.stringify(loggedUser), {
                maxAge: 30 * 24 * 60 * 60,
                path: "/",
            });

            setUser({ email, password, steps: loggedUser.steps });

            return { user };
        } catch (error) {
            setUser(null);
            return { error };
        }
    };

    const logout = async () => {
        console.log("logout");
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider
            value={{ authenticated: !!user, login, logout, userIsLoading, setUserIsLoading, user, setUser }}
        >
            {children}
        </AuthContext.Provider>
    );
};
