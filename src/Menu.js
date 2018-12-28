import React from 'react'
import { Flex, Box, Heading as H } from "rebass"
import styled from 'styled-components'

/**
 * Heading
 * adds a transition rule
 * @returns Heading
 */
const Heading = styled(H)`
  text-align:center;
  transition: all 0.13s linear;
`

/**
 * ColorBox
 * Display heading with defaults. Adds color to the box
 * @param {object} props
 */
const ColorBox = ({label, colors, ...props}) => {
  return (
    <Heading
      fontFamily='monospace'
      py={[20,25]}
      px={[20]}
      width={[1/2,1/4]}
      children={label}
      style={{
        color: colors[1],
        background: colors[0],
      }}
      {...props}
    />
  )
}

/**
 * Displays a menu with info about the current `theme`
 * @param {object} props
 */
const Menu = ({theme, ...props}) => {
  return (
    <Flex style={{zIndex:9}} my={[0,10]}>
      <ColorBox label={theme.color} colors={[theme.color, theme.base]} />
      <ColorBox label={theme.base} colors={[theme.base, theme.color]} />
      <Box width={[0, 1]}/>
    </Flex>
  )
}

export default Menu
