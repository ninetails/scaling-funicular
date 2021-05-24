import { memo } from 'react'
import styled from 'styled-components'

const Header = styled.header`
  align-self: stretch;
  border-bottom: solid 2px #eee;
  padding: 1em 0 2em;
  text-align: center;
`

export default memo(Header)
