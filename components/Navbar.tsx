import React from 'react'
import Link from 'next/link';
import { Button, buttonVariants } from "@/components/ui/button"
import { House } from 'lucide-react';

const Navbar = () => {
  return (
    <div className=' bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0'>
      <div className=' container flex items-center justify-between'>
      <Link href='/'>
          <House />
        </Link>
        <Link className={buttonVariants()} href='/sign-in'>
          Sign in
        </Link>
      </div>
    </div>
  )
}

export default Navbar 

