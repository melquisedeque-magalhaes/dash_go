import LinkNext from "next/link"
import { Text } from "@chakra-ui/react";

export function Logo(){
    return(
        <LinkNext href="/dashboard">
            <Text
                fontSize={["2xl", "3xl"]}
                fontWeight="bold"
                letterSpacing="tight"
                w="64"
                cursor="pointer"
            >
                DashGo
                <Text as="span" ml="1" color="pink.500">.</Text>
            </Text>
        </LinkNext>
    )
}