
import { useAuth } from '../context/AuthContext'

function Profile() {
    const { user, logout } = useAuth()

    return (
        <main className="min-h-[85vh] px-4 py-12">
            <div className="mx-auto max-w-2xl">

                <div className="rounded-3xl bg-gradient-to-r from-violet-600 to-purple-500 p-8 text-white md:p-10">
                    <p className="text-sm text-violet-100">
                        YOUR PERSONAL SPACE
                    </p>

                    <h1 className="mt-3 text-3xl font-extrabold md:text-4xl">
                        Welcome, {user.name}! 🎉
                    </h1>

                    <p className="mt-3 text-violet-100">
                        You have successfully logged in.
                    </p>
                </div>

                <div className="mt-6 rounded-3xl border border-violet-100 bg-white p-8 shadow-lg shadow-violet-100/50">
                    <h2 className="text-xl font-bold">Your Profile</h2>

                    <div className="mt-6 flex items-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-100 text-2xl font-bold text-violet-700">
                            {user.name.charAt(0).toUpperCase()}
                        </div>

                        <div>
                            <p className="text-lg font-bold">{user.name}</p>
                            <p className="break-all text-slate-500">{user.email}</p>
                        </div>
                    </div>

                    <div className="mt-8 rounded-xl bg-slate-50 p-4">
                        <p className="text-sm text-slate-500">Account status</p>
                        <p className="mt-1 font-semibold text-green-600">
                            ● Logged in
                        </p>
                    </div>

                    <button
                        onClick={logout}
                        className="mt-6 rounded-xl bg-red-50 px-5 py-3 font-semibold text-red-600 transition hover:bg-red-100"
                    >
                        Logout
                    </button>
                </div>

            </div>
        </main>
    )
}

export default Profile
