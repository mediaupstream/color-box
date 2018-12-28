import React, { useState, Fragment } from 'react'
import { Box } from "rebass"
import ColorHash from "color-hash"
import palette from 'hello-color'
import styled from 'styled-components'
import Menu from './Menu'

/**
 * Initial state value
 */
export const INITIAL_VALUE = 'cbox: type here . . . '

/**
 * Sums the code point values for each character in `n`
 * @param {string} n a string value
 * @returns {number} the sum
 */
const sumStr = n => n.split('').map(i => i.codePointAt(0)).reduce((i, a) => i+a, 0)

/**
 * ColorHash instance
 */
const ch = new ColorHash()

/**
 * Bloop
 * A bloopy box, for aesthetic purposes only
 * @returns Bloop
 */
const Bloop = styled(Box)`
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:white;
  z-index:7;
  transition: transform 0.13s linear;
  pointer-events:none;
`

/**
 * Input
 * this input is actually going to be
 * a textarea
 * @returns Input
 */
const Input = styled(Box)`
  z-index:9;
  flex:1;
  background:transparent;
  font-size:5rem;
  font-family:'Helvetica Neue', Helvetica, sans-serif;
  font-weight:bold;
  transition: border 0.13s linear;
  &:hover {
    border-size:2rem;
  }
`
/**
 * Input default props
 * see, it's a textarea...
 */
Input.defaultProps = {
  as:'textarea',
  autoComplete: "off",
  autoCorrect: "off",
  autoCapitalize: "off",
  spellCheck: false,
  autoFocus: true,
}

/**
 * Container
 * A flexbox container
 * @returns Container
 */
const Container = styled(Box)`
  display: flex;
  flex:1;
  flex-direction:column;
`

/**
 * Displays the app, uses state hooks
 */
const App = () => {
  // Hooks
  const [value, setValue] = useState(INITIAL_VALUE)
  // Generate a color theme from the value in state
  const theme = palette(ch.hex(value))
  const ts = sumStr(value)

  return (
    <Fragment>
      <Bloop style={{
        transform: `rotate(${ts%360}deg) skew(${(ts/4)%360}deg)`
      }}/>
      <Container
        style={{
          background:theme.base
        }}
        p={[0, 80]}
        pt={[0, 0]}
        >
        <Menu theme={theme} />
        <Input
          value={value}
          p={[3, 20]}
          style={{
            border: `1rem solid ${theme.color}`,
            color: theme.color,
          }}
          onChange={({ target }) => {
            setValue(target.value)
          }}
          />
      </Container>
    </Fragment>
  )
}

export default App;
