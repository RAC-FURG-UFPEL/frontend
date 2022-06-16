import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState()

    useEffect(() => {
        const userToken = localStorage.getItem("user_token")
        const usersStorage = localStorage.getItem("users_db")

        if (userToken && usersStorage) {
            const hasUser = JSON.parse(usersStorage)?.filter(
                (user) => user.email === JSON.parse(userToken).email
            )

            if (hasUser) setUser(hasUser[0])
        }
    }, [])

    const signin = (email, password) => {
        const data = { email: email, password: password }
        console.log(data)

        fetch('http://localhost:5000/auth/authenticate', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({ 'Content-Type': 'application/json' })
        }).then(
            response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error("Login inválido")
            }
        ).then(token => {
            localStorage.setItem('user_token', token)
        })
            .catch(e => console.log(e))

        const hasUser = 1

        if (hasUser?.lenght) {
            if (hasUser[0].email === email && hasUser[0].password === password) {
                const token = Math.random().toString(36).substring(2)
                localStorage.setItem("user_token", JSON.stringify({ email, token }))
                setUser({ email, password })
                return
            } else {
                return "Email ou senha incorreta"
            }
        } else {
            return "Usuário não encontrado"
        }

        return <AuthContext.Provider>{children}</AuthContext.Provider>
    }

    return (
        <AuthContext.Provider
            value={{ user, signed: !!user, signin }}
        >
            {children}
        </AuthContext.Provider>
    )
}