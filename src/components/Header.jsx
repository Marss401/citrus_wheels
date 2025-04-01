import React from 'react';
import { Link } from 'react-router-dom';
import CitrusLogo from './CitrusLogo';


export default function Header() {
  return (
    <header className='sticky top-0 z-10 mx-auto flex w-full'>
      <div className='container mx-auto flex justify-between items-center p-4'>
        <Link to={"/"} className="flex justify-center items-center w-max gap-1"><CitrusLogo />
        <h1 className="text-primary text-xl md:text-2xl lg:text-3xl font-bold">CitrusWheels</h1>
        </Link>
        <div className="flex w-max gap-16 justify-between items-center">
          <Link to={"/"}><h1 className="text-secondary text-opacity-70 font-semibold hover:underline underline-offset-8 hover:text-primary cursor-pointer">Home Page</h1></Link>
          <Link to={"/rentcars"}><h1 className="text-secondary text-opacity-70 font-semibold hover:underline underline-offset-8 hover:text-primary cursor-pointer">Rent Cars</h1></Link>
          <Link to={"/buycars"}><h1 className="text-secondary text-opacity-70 font-semibold hover:underline underline-offset-8 hover:text-primary cursor-pointer">Buy Cars</h1></Link>
          <Link to={"/news"}><h1 className="text-secondary text-opacity-70 font-semibold hover:underline underline-offset-8 hover:text-primary cursor-pointer">News</h1></Link>
        </div>
        <Link to={"/signup"} className="border-solid rounded-md hover:bg-secondary hover:text-light bg-primary flex font-normal text-md px-6 py-1 text-light">Sign In</Link>
      </div>

    </header>
  )
}
