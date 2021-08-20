import { ElementType } from "react";
import { ActiveLink } from '../../components/ActiveLink'
import { Icon, Link, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";


interface NavLinkProps extends ChakraLinkProps{
    icon: ElementType;
    title: string;
    url: string;
}

export function NavLink({ title, icon, url, ...rest }: NavLinkProps){
    return(
        <ActiveLink href={url} passHref>
            <Link display="flex" aling="center" {...rest}>
                
                <Icon as={icon} fontSize="20" />
                <Text ml="4" fontWeight="medium">
                    { title }
                </Text>
                
            </Link>
        </ActiveLink>
    )
}