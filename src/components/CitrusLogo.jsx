import { citrusLogoMain } from "../assets/images"

import React from 'react'

export default function CitrusLogo() {
  return (
    <div className="flex items-center justify-center w-20 h-20">
        <img src={citrusLogoMain} alt="citrus logo" />
    </div>
  )
}
