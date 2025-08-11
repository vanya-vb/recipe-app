import { Link } from 'react-router'

export default function NotFound() {
    return (
        <main class="grid h-screen place-items-center bg-[linear-gradient(to_bottom,rgba(0,0,0,0.70),rgba(0,0,0,0.80)),url('https://images.unsplash.com/photo-1506160077784-2b2ddaf8992b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center px-6 py-24 sm:py-32 lg:px-8">
            <div class="text-center">
                <p class="text-base font-semibold text-tangerine">404</p>
                <h1 class="mt-4 text-5xl font-semibold tracking-tight text-balance text-platinum sm:text-7xl">Page not found</h1>
                <p class="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Sorry, we couldn’t find the page you’re looking for.</p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                    <Link to="/" class="rounded-md bg-tangerine px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-tangerine/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tangerine">Go back home</Link>
                </div>
            </div>
        </main>
    );
}