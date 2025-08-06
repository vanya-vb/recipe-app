export default function HeroSection() {

    return (
        <section className="relative isolate px-6 pt-14 lg:px-8 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.3)),url('https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center w-full">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-200 ring-1 ring-gray-200/10 hover:ring-gray-900/20">
                        Announcing our next round of funding.{' '}
                        <a href="#" className="font-semibold text-indigo-600">
                            <span aria-hidden="true" className="absolute inset-0" />
                            Read more <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
                        Discover. Cook. Enjoy.
                    </h1>
                    <p className="mt-8 text-lg font-medium text-pretty text-gray-200 sm:text-xl/8">
                        Start cooking smarter, faster, and tastier today.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Get Started
                        </a>
                        <a href="#" className="text-sm/6 font-semibold text-gray-200">
                            Log in <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}