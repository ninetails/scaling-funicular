import { memo } from 'react'
import styled from 'styled-components'

const Navigation = styled.nav`
  align-self: stretch;

  ul {
    border-bottom: solid 2px #eee;
    justify-content: center;
    display: flex;
    margin: 0 0 .5em;
    padding: 1em 0;
  }

  li {
    list-style: none;
  }

  li + li:before {
    content: '|';
    padding: 0 .2em;
  }

  a {
    text-decoration: underline;
  }
`

export default memo(Navigation)
