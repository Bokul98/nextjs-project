"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function AboutPages() {
    const router = useRouter()
    const isLoggedIn = false;
    const handleButtonClick = () => {
        if (isLoggedIn) {
            router.push('/about/addresses')
        } else {
            router.push('/')
        }
    }
    return (
        <div>
            <h1 className="text-2xl font-bold">About Us</h1>
            <p className="mt-4">We are a company dedicated to providing the best services.</p>
            <p><Link href="/about/addresses" className="mt-4 inline-block text-blue-500 hover:underline">
                View Our Addresses
            </Link></p>
            <button type="button" onClick={handleButtonClick}>Address Pages</button>
        </div>
    )
}
