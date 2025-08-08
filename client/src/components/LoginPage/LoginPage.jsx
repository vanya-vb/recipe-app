import { Link } from 'react-router'

export default function LoginPage() {
    return (
        <section className="flex h-screen flex-col justify-center px-6 py-38 lg:px-8 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.85),rgba(0,0,0,0.9)),url('https://images.unsplash.com/photo-1514986888952-8cd320577b68?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-top bg-cover">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Sign in to your account</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" method="POST" className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-platinum">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-olivine/70 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-platinum">
                                Password
                            </label>
                            <div className="text-sm">
                                {/* <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
                                    Forgot password?
                                </a> */}
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                autoComplete="current-password"
                                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-olivine/70 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-olivine px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-olivine/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olivine-70"
                        >
                            Sign In
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-platinum/90">
                    Not a member?{' '}
                    <Link to="/register" className="font-semibold text-olivine hover:text-olivine/70">
                        Register here →
                    </Link>
                </p>
            </div>
        </section>
    )
}