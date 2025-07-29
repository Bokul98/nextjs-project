import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <div>
            <nav className="flex justify-center items-center p-4 bg-blue-500 text-white">
                <ul className="flex justify-center items-center gap-4">
                    <Link href="/">
                        <li>Home</li>
                    </Link>
                    <Link href="/about">
                        <li>About</li>
                    </Link>
                    <Link href="/service">
                        <li>Service</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;