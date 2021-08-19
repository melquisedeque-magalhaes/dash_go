
import { Icon, Link, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends ChakraLinkProps{
    icon: ElementType;
    title: string;
}

export function NavLink({ title, icon, ...rest }: NavLinkProps){
    return(
        <Link display="flex" aling="center" {...rest}>
            <Icon as={icon} fontSize="20" />
            <Text ml="4" fontWeight="medium">
                { title }
            </Text>
        </Link>
    )
}