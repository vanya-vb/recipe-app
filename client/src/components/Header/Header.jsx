import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import useAuth from '../../hooks/useAuth'

import logoImg from '/src/assets/logo.png'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { email, isAuthenticated } = useAuth();

    const guestNavigation = [
        { name: 'Home', href: '/' },
        { name: 'Recipes', href: '/recipes' },
        { name: 'Shopping List', href: '/shopping-list' },
        { name: 'Login', href: '/login' },
        { name: 'Register', href: '/register' },
    ];

    const userNavigation = [
        { name: 'Home', href: '/' },
        { name: 'Recipes', href: '/recipes' },
        { name: 'Add Recipe', href: '/recipes/create' },
        { name: 'Shopping List', href: '/shopping-list' },
        { name: 'AI Chef', href: '/ai-chef' },
        { name: 'Logout', href: '/logout' },
    ];

    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-night/80">
            <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                            alt="logo"
                            src={logoImg}
                            className="h-8 w-auto"
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">

                    {
                        isAuthenticated ?
                            (
                                userNavigation.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        to={item.href}
                                        end
                                        className={({ isActive }) => `text-sm/6 font-semibold ${isActive ? "text-tangerine border-b" : "text-white"} hover:text-tangerine transition`}
                                    >
                                        {item.name}
                                    </NavLink>
                                ))
                            )
                            :
                            (
                                guestNavigation.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        to={item.href}
                                        end
                                        className={({ isActive }) => `text-sm/6 font-semibold ${isActive ? "text-tangerine border-b" : "text-white"} hover:text-tangerine transition`}
                                    >
                                        {item.name}
                                    </NavLink>
                                ))
                            )
                    }

                </div>
            </nav>

            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-night/95 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt="logo"
                                src={logoImg}
                                className="h-8 w-auto"
                                onClick={() => setMobileMenuOpen(false)}
                            />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-olivine"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-100/10">
                            <div className="space-y-2 py-6">

                                {
                                    email ?
                                        (
                                            userNavigation.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.href}
                                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-platinum hover:bg-olivine/15"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))
                                        )
                                        :
                                        (
                                            guestNavigation.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.href}
                                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-platinum hover:bg-olivine/15"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))
                                        )
                                }

                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}