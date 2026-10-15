
import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        return JSON.parse(localStorage.getItem('loggedInUser')) || null
    })

    function register(name, email, password) {
        const newUser = { name, email, password }

        localStorage.setItem('registeredUser', JSON.stringify(newUser))
    }

    function login(email, password) {
        const savedUser = JSON.parse(
            localStorage.getItem('registeredUser')
        )

        if (
            !savedUser ||
            savedUser.email !== email ||
            savedUser.password !== password
        ) {
            return false
        }

        const loggedInUser = {
            name: savedUser.name,
            email: savedUser.email,
        }

        localStorage.setItem(
            'loggedInUser',
            JSON.stringify(loggedInUser)
        )

        setUser(loggedInUser)
        return true
    }

    function logout() {
        localStorage.removeItem('loggedInUser')
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}
