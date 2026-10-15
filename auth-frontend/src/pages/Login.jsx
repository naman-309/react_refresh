
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Login() {
    const { login } = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        setError('')

        const success = login(email, password)

        if (success) {
            navigate('/profile')
        } else {
            setError('Invalid email or password.')
        }
    }

    return (
        <main className="flex min-h-[85vh] items-center justify-center px-4 py-10">
            <div className="w-full max-w-md rounded-3xl border border-violet-100 bg-white p-8 shadow-xl shadow-violet-100/60 md:p-10">

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-2xl">
                    👋
                </div>

                <h1 className="text-3xl font-extrabold">Welcome back</h1>
                <p className="mb-8 mt-2 text-slate-500">
                    Login to continue to your account.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
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
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    {error && (
                        <p className="text-sm text-red-500">{error}</p>
                    )}

                    <button className="w-full rounded-xl bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-700">
                        Login →
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-slate-500">
                    Don't have an account?{' '}
                    <Link to="/register" className="font-semibold text-violet-600">
                        Register
                    </Link>
                </p>
            </div>
        </main>
    )
}

export default Login
