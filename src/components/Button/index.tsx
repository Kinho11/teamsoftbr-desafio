import React, {useState} from 'react'

import { ButtonOrange } from './Button.styled'
import { Popover } from '../Popover'

interface Ibuttton {
  text ?: string
}


export const Button: React.FC<Ibuttton> = ({text}) => {
  
  const [click, setClick] = useState()

  const Click = (e: any) => {
    setClick(e.isTrusted)
  }

  return (
    <>
     <ButtonOrange onClick={Click}>{text}</ButtonOrange>
     <Popover cliquei={click}/> 
    </>
  )
}
