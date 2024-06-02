"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import logo from "/public/icons/logo.png";
import Link from 'next/link';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const links = ["home", "about us", "pricing", "features"];

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className='w-full px-5 lg:container mx-auto py-5 flex justify-between items-center relative z-[100]'>
            <div className="left flex justify-between sm:justify-normal w-full items-center gap-10 relative z-[100]">
                <div className='logo'>
                    <Image src={logo} width={120} height={100} alt={"logo"} />
                </div>

                <div className="links hidden sm:flex items-center gap-5 lg:gap-10">
                    {links.map((link, index) => (
                        <Link href="#" key={index} className='text-base hover:underline hover:text-theme duration-300 lg:text-xl capitalize font-medium first:text-theme first:font-bold'>
                            {link}
                        </Link>
                    ))}
                </div>

                <div className='hamburger p-2 cursor-pointer sm:hidden flex justify-end flex-col gap-y-1 w-10' onClick={toggleDropdown}>
                    <div className='h-1 w-7 rounded-lg bg-black'></div>
                    <div className='h-1 w-7 rounded-lg bg-black'></div>
                    <div className='h-1 w-7 rounded-lg bg-black'></div>
                </div>

                {dropdownOpen && (
                    <div className='absolute top-10 right-5 rounded-lg w-48 bg-white shadow-lg flex flex-col items-start p-5 gap-3 sm:hidden z-[100]'>
                        {links.map((link, index) => (
                            <Link href="#" key={index} className='text-base hover:underline hover:text-theme duration-300 capitalize font-medium first:text-theme first:font-bold'>
                                {link}
                            </Link>
                        ))}
                        <button className="btn-theme text-sm lg:text-base mt-3">Download</button>
                    </div>
                )}
            </div>

            <div className="right hidden sm:block">
                <button className="btn-theme text-sm lg:text-base">Download</button>
            </div>
        </nav>
    );
};

export default Navbar;
