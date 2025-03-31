import React from 'react';
import { Link } from 'react-router-dom';
import CitrusLogo from './CitrusLogo';


export default function Header() {
  return (
    <header className='fixed top-0 z-10 mx-auto flex w-full'>
      <div className='container mx-auto flex justify-center items-center p-4'>
        <Link to={"/"} className="flex justify-center items-center w-max gap-2">
      <CitrusLogo />
        <h1 className="text-primary text-xl md:text-2xl lg:text-4xl font-bold">CitrusWheels</h1>
        </Link>
      </div>

    </header>
  )
}
