import { Link } from 'react-router'

export default function HeroSection() {

    return (
        <section className="w-screen h-screen relative isolate px-6 lg:px-8 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.80),rgba(0,0,0,0.4)),url('https://images.unsplash.com/photo-1514986888952-8cd320577b68?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                </div>
                <div className="text-center">
                    <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
                        Discover. Cook. Enjoy.
                    </h1>
                    <p className="mt-8 text-lg font-medium text-pretty text-platinum sm:text-xl/8">
                        Start cooking smarter, faster, and tastier today.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to="/recipes"
                            className="rounded-md bg-tangerine px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-tangerine/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tangerine/70"
                        >
                            Browse Recipes
                        </Link>
                        <Link to="/login" className="text-sm/6 font-semibold text-tangerine">
                            Log in <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}