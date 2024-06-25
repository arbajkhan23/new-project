import React from "react";
import { useState } from "react";

function Header(){
    const [showMenu, setShowMenu] = useState(false);
    return(
        <header className="bg-black">
            <div className="container mx-auto">
                <nav className="flex justify-between items-center">
                    <a href="#" className="text-white">logo</a>
                    <ul>
                        <li className="inline-block relative">
                            <a href="/" className="text-white block p-3" >Home</a>
                           
                            </li>
                        <li className="inline-block"><a href="#" className="text-white block p-3" onClick={() => setShowMenu(!showMenu)}>About</a>
                        {showMenu && ( <ul className="absolute bg-white">
                                <li><a href="#" className="text-balck  py-2">Home 1</a></li>
                                <li><a href="#" className="text-balck  py-2">Home 2</a></li>
                                <li><a href="#" className="text-balck  py-2">Home 3</a></li>
                            </ul>)}</li>
                        <li className="inline-block"><a href="/About" className="text-white block p-3">Services</a></li>
                        <li className="inline-block"><a href="#" className="text-white block p-3">Contact</a></li>
                        <li className="inline-block"><a href="#" className="text-white block p-3">Blog</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header;