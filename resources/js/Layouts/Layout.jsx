import Nav from "@/Layouts/Nav.jsx";

export default function Layout({children}) {

    return (
        <>
            <header className='bg-gradient-to-r from-[#1a759f] to-[#3a5a40] text-white h-10 md:h-16 border-b border-white/70'>
                { <Nav /> }
            </header>
            <main className='min-h-screen bg-gradient-to-r from-[#1a759f] to-[#3a5a40] text-white'>
                {children}
            </main>
        </>
    )
}
