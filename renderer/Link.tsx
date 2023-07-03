import React from 'react'
import { usePageContext } from './usePageContext'

type LinkProps = {
  href?: string
  className?: string
  children: React.ReactNode
}

function Link({ href, className, children }: LinkProps) {
  const pageContext = usePageContext()

  const cssClassName = [
    className,
    pageContext.urlPathname === href && 'is-active',
    href && pageContext.urlPathname === href && 'is-active'
  ]
    .filter(Boolean)
    .join(' ')
  return <a href={href} className={cssClassName} >{children}</a>
}

export default Link
