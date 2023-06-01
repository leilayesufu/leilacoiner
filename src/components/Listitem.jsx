import React from 'react'
import { Link } from 'react-router-dom'

const Listitem = (coin) => {
  return (
    <div>
    <Link to = {`/${coin.id}`}>
        {coin.name}
    </Link>
    </div>
  )
}

export default Listitem;