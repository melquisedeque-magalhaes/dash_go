import { useRouter } from 'next/router'
import Link, { LinkProps } from 'next/link'
import { cloneElement, ReactElement } from 'react'

interface ActiveLinkProp extends LinkProps{
    children: ReactElement,
    shouldMatchExactHref?: boolean;
}

export function ActiveLink({ 
    children, 
    shouldMatchExactHref = false,
    ...rest 
}: ActiveLinkProp){

    let isActive = false

    const { asPath } = useRouter()

    if(shouldMatchExactHref && asPath === rest.href || asPath === rest.as)
        isActive = true

    if(!shouldMatchExactHref &&
         asPath.startsWith(String(rest.href)) ||
          asPath.startsWith(String(rest.as))
    )   
        isActive = true


    return(
        <Link {...rest}>
            {cloneElement(children, {
                color: isActive ? 'pink.400' : 'gray.50'
            })}
        </Link>
    )
}