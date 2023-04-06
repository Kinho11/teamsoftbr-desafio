import React from 'react'

import { ButtonOrange } from './Button.styled'

interface Ibuttton {
  text ?: string
}

export const Button: React.FC<Ibuttton> = ({text}) => {
  return (
    <ButtonOrange>{text}</ButtonOrange>
  )
}
