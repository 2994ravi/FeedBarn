import React from 'react'
import { useSelector } from 'react-redux'

const userMenu = () => {
    const user=useSelector((state) =>state.user)
  return (
    <div>
      My Account
    </div>
  )
}

export default userMenu
