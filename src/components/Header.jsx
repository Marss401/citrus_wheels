import React from 'react';
import CitrusLogo from './CitrusLogo';

export default function Header() {
  return (
    <header className='bg-backdrop sticky top-0 z-10 mx-auto flex w-full items-center justify-between p-8'>
      <CitrusLogo />
    </header>
  )
}
