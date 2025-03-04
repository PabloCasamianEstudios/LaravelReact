export default function Layout() {

    return (
        <>
            <header className='bg-gradient-to-r from-[#1a759f] to-[#3a5a40] text-white h-10 md:h-16 border-b border-white/70'>
                <nav className='flex items-center justify-between max-w-[1400px] px-4 mx-auto h-full'>
                    <div className="font-300 text-xl">
                        Logo
                    </div>
                    <div className="text-sm hidden md:flex items-center uppercase font-semibold">
                        <ul className='flex items-center '>
                            <li>
                                <a href="" className='p-4'>Home</a>
                            </li>
                            <li>
                                <a href="" className='p-4'>About</a>
                            </li>
                            <li>
                                <a href="" className='p-4'>Contact</a>
                            </li>
                        </ul>
                        <div>
                            <button className='px-4 py-2 border uppercase'>Sign up</button>
                        </div>
                    </div>
                    <button className='md:hidden'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="lucide lucide-menu"
                            viewBox="0 0 24 24"
                        >
                            <path d="M4 12L20 12"></path>
                            <path d="M4 6L20 6"></path>
                            <path d="M4 18L20 18"></path>
                        </svg>
                    </button>
                </nav>
            </header>
            <main className='min-h-screen bg-gradient-to-r from-[#1a759f] to-[#3a5a40] text-white'>

            </main>
        </>
    )
}
