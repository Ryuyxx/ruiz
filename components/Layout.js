import Head from "next/head";
import Link from "next/link";
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Layout({ children, title = "Ruizu" }) {
    return (
        <html lang="ja-JP">
        <div className="bg-gradient-to-tl from-blue-100 to-blue-400 flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
            <Head>
                <title>{title}</title>
            </Head>
            {/*<header>*/}
            {/*    <div>*/}
            {/*        <nav className=" dark:bg-white  ">*/}
            {/*            <div className="max-w-7xl mx-auto px-8">*/}
            {/*                <div className="flex items-center justify-between h-16">*/}
            {/*                    <div className=" flex items-center">*/}
            {/*                        <a className="flex-shrink-0" href="/">*/}
            {/*                            <img className="h-8 w-8" src="/icons/rabbit.svg" alt="Workflow"/>*/}
            {/*                        </a>*/}
            {/*                        <div className="hidden md:block">*/}
            {/*                            <div className="ml-10 flex items-baseline space-x-4">*/}
            {/*                                <a className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"*/}
            {/*                                   href="/">*/}
            {/*                                    Home*/}
            {/*                                </a>*/}
            {/*                                <a className="text-gray-300 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"*/}
            {/*                                   href="/gallery">*/}
            {/*                                    Gallery*/}
            {/*                                </a>*/}
            {/*                                <a className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"*/}
            {/*                                   href="/profile">*/}
            {/*                                    Profile*/}
            {/*                                </a>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                    <div className="block">*/}
            {/*                        <div className="ml-4 flex items-center md:ml-6">*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                    <div className="-mr-2 flex md:hidden">*/}
            {/*                        <button*/}
            {/*                            className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">*/}
            {/*                            <svg width="20" height="20" fill="currentColor" className="h-8 w-8"*/}
            {/*                                 viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">*/}
            {/*                                <path*/}
            {/*                                    d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">*/}
            {/*                                </path>*/}
            {/*                            </svg>*/}
            {/*                        </button>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="md:hidden">*/}
            {/*                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">*/}
            {/*                    <a className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"*/}
            {/*                       href="/#">*/}
            {/*                        Home*/}
            {/*                    </a>*/}
            {/*                    <a className="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium"*/}
            {/*                       href="/gallery">*/}
            {/*                        Gallery*/}
            {/*                    </a>*/}
            {/*                    <a className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"*/}
            {/*                       href="/profile">*/}
            {/*                        Profile*/}
            {/*                    </a>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </nav>*/}
            {/*    </div>*/}
            {/*</header>*/}
            <main className="flex flex-1 justify-center items-center flex-col w-screen">
                {children}
            </main>

            <footer className="w-full h-12 flex justify-center items-center">
                <FontAwesomeIcon className="mr-2" icon={faCopyright} />
                Hoi Ching Chan
            </footer>
        </div>
        </html>
    );
}