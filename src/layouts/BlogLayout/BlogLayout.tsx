import { memo } from 'react';
import Head from "next/head"
import Link from "next/link"
import type { ReactNode } from "react"
import StyledNavigation from "../../components/Navigation"

interface BlogLayoutProps {
  children: ReactNode
}

function BlogLayout ({ children }: BlogLayoutProps) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>

      <StyledNavigation>
        <ul>
          <li>
            <Link href="/blog">Index</Link>
          </li>
          <li>
            <Link href="/blog/post-one">Post One</Link>
          </li>
          <li>
            <Link href="/blog/post-two">Post Two</Link>
          </li>
        </ul>
      </StyledNavigation>

      {children}
    </>
  )
}

BlogLayout.whyDidYouRender = true

export default memo(BlogLayout)
