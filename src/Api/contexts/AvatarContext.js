// src/contexts/AvatarContext.js
import React, { createContext, useState } from 'react'
import { img_avatar } from '../../Assets' // Adjust the path as needed

const AvatarContext = createContext()

export const AvatarProvider = ({ children }) => {
  const [avatar, setAvatar] = useState(img_avatar)

  return (
    <AvatarContext.Provider value={{ avatar, setAvatar }}>
      {children}
    </AvatarContext.Provider>
  )
}

export default AvatarContext
