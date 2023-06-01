import React from 'react'
import { Link } from 'react-router-dom'

export const Header = ({ back }) => {
  return (
    <header className='header'>
      <div className='width'>
        {back && (
                  <Link to ="/">     
        <i className="fa fa-arrow-left fa-2xl" aria-hidden="true"></i>
                </Link>)}
            <h1><Link to="/">LeilaCoiner!</Link></h1>
            </div></header>
  )
}
