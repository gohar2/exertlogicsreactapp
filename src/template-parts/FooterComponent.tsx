import React from 'react'
import { siteparams } from '../consts/siteConsts'

export default function FooterComponent() {
  return (
    <div className='footer'>
        <h2>{siteparams.footertext}</h2>
      </div>

  )
}
