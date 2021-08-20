import LinkNext from "next/link"
import { Box, Flex, Heading, Button, Icon, Table, Tr, Checkbox, Thead, Th, Tbody, Td, Text, useBreakpointValue } from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'

import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { Sidebar } from '../../components/Sidebar'

export default function UserList(){

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return(
        <Flex direction="column" h="100vh" w="100%">
            <Header />

             <Flex
              w="100%"
              my="6"
              maxWidth={1480}
              mx="auto"
              px={["4", "6"]}
            >
                <Sidebar />

                <Box flex="1" bg="gray.800" borderRadius={8} p={["6", "8"]} width="100%">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Usuarios</Heading>

                        <LinkNext href="/users/create" passHref>
                            <Button
                                as="a"
                                size="sm"
                                fontSize="sm"
                                colorScheme="pink"
                                cursor="pointer"
                            >
                                <Icon
                                    fontSize="20"
                                    as={RiAddLine}
                                />
                                { isWideVersion ? "Criar novo" : ''}
                            </Button>
                        </LinkNext>
                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px={["2", "4", "6"]} color="green.300" width="8">
                                    <Checkbox colorScheme="pink" />
                                </Th>
                                <Th>
                                    Usuario
                                </Th>

                                {   
                                    isWideVersion && 
                                    <Th>
                                        Data de Cadastro
                                    </Th>
                                }
                                
                                { isWideVersion &&  <Td></Td> }
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px={["2", "4", "6"]}>
                                    <Checkbox colorScheme="pink" />
                                </Td>

                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Melquisedeque</Text>
                                        <Text fontSize="sm" color="gray.300">melqui.sodre15@gmail.com</Text>
                                    </Box>
                                </Td>

                                {
                                    isWideVersion && (
                                        <Td>
                                            19 de Agosto, 2021
                                        </Td>
                                    )
                                }
                                
                                {
                                    isWideVersion && (
                                    <Td>
                                        <Button
                                            as="a"
                                            size="sm"
                                            fontSize="sm"
                                            colorScheme="purple"
                                        >   <Icon
                                                fontSize="16"
                                                as={RiPencilLine}
                                                mr={isWideVersion && '2'}
                                            />
                                            { isWideVersion ?  "Editar" : ''}
                                        </Button>
                                    </Td>
                                )}
                            </Tr>
                        </Tbody>
                    </Table>

                    <Pagination />
                </Box>
            </Flex>
        </Flex>
    )
}