
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Home() {
    const { user } = useAuth()

    return (
        <main className="min-h-screen overflow-hidden bg-gradient-to-br from-violet-50 via-white to-purple-100 px-6 py-16 md:px-16 md:py-24">
            <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

                <div>
                    <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
                        ✦ Simple. Secure. Personal.
                    </span>

                    <h1 className="mt-7 text-5xl font-extrabold leading-tight md:text-6xl">
                        Your space,
                        <span className="block text-violet-600">
                            your account.
                        </span>
                    </h1>

                    <p className="mt-6 max-w-md text-lg leading-8 text-slate-500">
                        A simple place to create your account, sign in,
                        and see your personal profile.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        {user ? (
                            <Link
                                to="/profile"
                                className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-200"
                            >
                                View Profile →
                            </Link>
                        ) : (
                            <>
                                <Link
                                    to="/register"
                                    className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-200"
                                >
                                    Create Account →
                                </Link>

                                <Link
                                    to="/login"
                                    className="rounded-xl border border-violet-200 bg-white px-6 py-3 font-semibold text-violet-700"
                                >
                                    Login
                                </Link>
                            </>
                        )}
                    </div>
                </div>

                <div className="rounded-3xl border border-white bg-white/80 p-8 shadow-2xl shadow-violet-100 md:p-10">
                    <div className="mb-8 flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-2xl">
                            ✨
                        </div>

                        <div>
                            <p className="text-xl font-bold">Your personal space</p>
                            <p className="text-sm text-slate-500">
                                Everything starts here
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {[
                            ['01', 'Create an account', 'Register with your details'],
                            ['02', 'Sign in', 'Use your email and password'],
                            ['03', 'View your profile', 'See your personal details'],
                        ].map((item) => (
                            <div
                                key={item[0]}
                                className="flex items-center gap-4 rounded-2xl bg-violet-50 p-4"
                            >
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white font-bold text-violet-600">
                                    {item[0]}
                                </span>

                                <div>
                                    <p className="font-semibold">{item[1]}</p>
                                    <p className="text-sm text-slate-500">{item[2]}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Home
