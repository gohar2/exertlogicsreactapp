import React from 'react'
import { Outlet } from 'react-router-dom'
import { emp } from '../static'
import { links, siteparams } from '../consts/siteConsts'

export default function HeaderComponent() {
  return (
    <header>
        

        <div className='header'>
          <h1>{siteparams.siteHeading}</h1>
          <p>{siteparams.slogan}</p>
        </div>

        <div className='topnav'>
          <a href={links.home}>Home</a>
          <a href={links.about}>About</a>
          <a href={links.dashboard} style={{ float: 'right' }}>
            Dashboard
          </a>
          <a href={links.blog}>Blog</a>
        </div>
      </header>
  )
}
