import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    name: string;
    email: string;
}

export function Profile({ name, email }:ProfileProps){
    return(
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>
                    {name}
                </Text>
                <Text color="gray.300" fontSize="small">
                    {email}
                </Text>
            </Box>

            <Avatar
                size="md" 
                name="Melqui Sodre" 
                src="https://github.com/melquisedeque-magalhaes.png" 
            />
            
        </Flex>
    )
}