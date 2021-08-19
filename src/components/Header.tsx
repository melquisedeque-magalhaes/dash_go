import { Flex, Input, Text, Icon, HStack, Box, Avatar } from '@chakra-ui/react'
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'

export function Header(){
    return(
        <Flex
          as="header"
          width="100%"
          maxWidth={1480}
          h="20"
          mx="auto"
          px="6"
          align="center"
          mt="4"
        >
            <Text
              fontSize="3xl"
              fontWeight="bold"
              letterSpacing="tight"
              w="64"
            >
                DashGo
                <Text as="span" ml="1" color="pink.500">.</Text>
            </Text>

            <Flex
                as="label"
                flex="1"
                py="4"
                px="8"
                maxWidth={400}
                alignSelf="center"
                color="gray.200"
                position="relative"
                bg="gray.800"
                borderRadius="full"
            >
                <Input 
                    color="green.50"
                    variant="unstyled"
                    placeholder="Buscar na plataforma"
                    _placeholder={{ color: 'gray.400' }}
                    px="4"
                    mr="4"
                />
                <Icon as={RiSearchLine} fontSize="20" />
            </Flex>
        
            <Flex
                align="center"
                ml="auto"
            >
                <HStack 
                    spacing="8"
                    mx="8"
                    pr="8"
                    py="1"
                    color="gray.300"
                    borderRightWidth={1}
                    borderColor="gray.700"
                > 
                    <Icon as={RiNotificationLine} />
                    <Icon as={RiUserAddLine} />
                </HStack>

                <Flex align="center">
                    <Box mr="4" textAlign="right">
                        <Text>
                            Melqui Sodre
                        </Text>
                        <Text color="gray.300" fontSize="small">
                            melqui.sodre15@gmail.com
                        </Text>
                    </Box>

                    <Avatar 
                        size="md" 
                        name="Melqui Sodre" 
                        src="https://github.com/melquisedeque-magalhaes.png" 
                    />
                    
                </Flex>
            </Flex>
        </Flex>
    )
}