"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavBar = () => {
    const pathName = usePathname();
    console.log(pathName, pathName.includes("dashboard"));
    // const isDashboard = pathName.includes("dashboard");
    if (!pathName.includes("dashboard")) {
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
    }
    else{
        return (
            <></>
        );
    }
};

export default NavBar;