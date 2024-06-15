function Header(){
    return(
        <header className="bg-black">
            <div className="container mx-auto">
                <nav className="flex justify-between items-center">
                    <a href="#" className="text-white">logo</a>
                    <ul>
                        <li className="inline-block"><a href="/" className="text-white block p-3">Home</a></li>
                        <li className="inline-block"><a href="/About" className="text-white block p-3">About</a></li>
                        <li className="inline-block"><a href="#" className="text-white block p-3">Services</a></li>
                        <li className="inline-block"><a href="#" className="text-white block p-3">Contact</a></li>
                        <li className="inline-block"><a href="#" className="text-white block p-3">Blog</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header;