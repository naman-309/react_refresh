
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Register() {
    const { register } = useAuth()
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        setError('')

        const savedUser = JSON.parse(
            localStorage.getItem('registeredUser')
        )

        if (savedUser && savedUser.email === email) {
            setError('This email is already registered.')
            return
        }

        register(name, email, password)
        navigate('/login')
    }

    return (
        <main className="flex min-h-[85vh] items-center justify-center px-4 py-10">
            <div className="w-full max-w-md rounded-3xl border border-violet-100 bg-white p-8 shadow-xl shadow-violet-100/60 md:p-10">

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-2xl">
                    ✨
                </div>

                <h1 className="text-3xl font-extrabold">Create account</h1>
                <p className="mb-8 mt-2 text-slate-500">
                    Start your journey with Simply.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                        placeholder="Full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <input
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                        type="password"
                        placeholder="Password (minimum 6 characters)"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        minLength={6}
                        required
                    />

                    {error && (
                        <p className="text-sm text-red-500">{error}</p>
                    )}

                    <button className="w-full rounded-xl bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-700">
                        Create Account →
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-slate-500">
                    Already have an account?{' '}
                    <Link to="/login" className="font-semibold text-violet-600">
                        Login
                    </Link>
                </p>
            </div>
        </main>
    )
}

export default Register
