
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Navbar() {
    const { user, logout } = useAuth()
    const navigate = useNavigate()

    function handleLogout() {
        logout()
        navigate('/login')
    }

    return (
        <nav className="flex items-center justify-between border-b border-violet-100 bg-white px-6 py-4 md:px-12">
            <Link to="/" className="text-2xl font-extrabold text-violet-700">
                ✦ dev@nkkr
            </Link>

            <div className="flex items-center gap-4 text-sm font-medium">
                <Link to="/" className="hover:text-violet-600">
                    Home
                </Link>

                {user ? (
                    <>
                        <Link to="/profile" className="hover:text-violet-600">
                            Profile
                        </Link>

                        <button
                            onClick={handleLogout}
                            className="rounded-lg bg-violet-600 px-4 py-2 text-white"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="hover:text-violet-600">
                            Login
                        </Link>

                        <Link
                            to="/register"
                            className="rounded-lg bg-violet-600 px-4 py-2 text-white"
                        >
                            Get Started
                        </Link>
                    </>
                )}
            </div>
        </nav>
    )
}

export default Navbar
